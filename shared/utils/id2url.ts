import type { VideoId } from '#shared/interfaces/Video'
import { getEnabledSupportedPlatforms } from '#shared/utils/platforms'

/**
 * get video url from id
 * @param id
 * @returns
 */
export const id2url = (id: VideoId): null | URL => {
  const [slug, videoKey] = <[string, string]>id.split(':')

  // get platform by slug
  const platform = getEnabledSupportedPlatforms().find((x) => x.slug == slug)
  if (!platform) return null

  // get url for platform
  const urlString = platform.videoKeyToUrl(videoKey)
  const url = new URL(urlString)

  return url
}
