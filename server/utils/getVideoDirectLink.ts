import type { VideoId } from '#shared/interfaces/Video'
import { id2url } from '#shared/utils/id2url'
import { videoCache } from './videoCache'
import YTDlpWrapDefault from 'yt-dlp-wrap'

// @ts-expect-error default not found
const YTDlpWrap = <typeof YTDlpWrapDefault>YTDlpWrapDefault.default
const ytDlpWrap = new YTDlpWrap('/usr/local/bin/yt-dlp')

/**
 * Get Direct stream link of the given video
 * @param videoId
 * @returns
 */
export const getVideoDirectLink = async (videoId: VideoId) => {
  const cacheRes = videoCache.get(videoId)

  // check if cache is available and not expired
  if (cacheRes && cacheRes.expires >= new Date()) {
    return cacheRes.directStreamUrl
  }

  // get url from the video
  const url = id2url(videoId)

  if (!url) return null

  // call yt-dlp to get video metadata and parse it
  const res = await ytDlpWrap.execPromise(['-j', url.toString()])
  const data = JSON.parse(res)

  // get stream url from metadata
  // TODO: search for the best format
  const lastFormat = data.formats.pop()
  const streamUrl = lastFormat.manifest_url || lastFormat.url

  // save cache and return
  videoCache.set(videoId, {
    directStreamUrl: streamUrl,
    expires: new Date(new Date().getTime() + 2 * 60 * 60 * 1000),
  })
  return streamUrl
}
