import type { SupportedPlatform, VideoId } from '#shared/interfaces/Video'
import { supportedPlatforms } from '#shared/utils/platforms'

/**
 * get video id from url
 * @param url
 * @returns
 */
export const urlToId = (url: string | URL): null | VideoId => {
  if (typeof url !== 'string') url = url.toString()

  // loop over all platforms
  for (const [slug, platform] of Object.entries(supportedPlatforms) as [
    keyof typeof supportedPlatforms,
    SupportedPlatform,
  ][]) {
    // loop over all urlFormats for the platforms
    for (const platformUrl of platform.urls) {
      // check if regex matches and return the video id if so
      const regexRes = url.match(platformUrl.regex)
      if (regexRes?.groups?.key) {
        return `${slug}:${regexRes.groups.key}`
      }
    }
  }

  return null
}
