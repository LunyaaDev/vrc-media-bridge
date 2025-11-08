import type { VideoId } from '#shared/interfaces/Video'
import { getEnabledSupportedPlatforms } from '#shared/utils/platforms'

/**
 * get video id from url
 * @param url
 * @returns
 */
export const urlToId = (url: string | URL): null | VideoId => {
  if (typeof url !== 'string') url = url.toString()

  // loop over all platforms
  for (const platform of getEnabledSupportedPlatforms()) {
    // loop over all urlFormats for the platforms
    for (const regex of platform.regex) {
      // check if regex matches and return the video id if so
      const regexRes = url.match(regex)
      if (regexRes?.groups?.key) {
        return `${platform.slug}:${regexRes.groups.key}`
      }
    }
  }

  return null
}
