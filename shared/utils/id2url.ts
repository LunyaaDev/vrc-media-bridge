import type { Platform, VideoId } from '#shared/interfaces/Video'
import { supportedPlatforms } from '#shared/utils/platforms'

/**
 * get video url from id
 * @param id
 * @returns
 */
export const id2url = (id: VideoId): null | URL => {
  const [platform, videoKey] = <[Platform, string]>id.split(':')

  const urlString = supportedPlatforms[platform].videoKeyToUrl(videoKey)
  const url = new URL(urlString)

  return url
}
