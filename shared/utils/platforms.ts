import type { SupportedPlatform } from '../interfaces/Video'
import { getConfig } from '#shared/utils/getConfig'

/**
 * gets the enabled supportedPlatforms based on the RuntimeConfig
 *
 * @returns
 */
export const getEnabledSupportedPlatforms = () => {
  const config = getConfig()

  return supportedPlatforms.filter(
    (platform) => config.enableNsfw || !platform.isNsfw,
  )
}

const supportedPlatforms: SupportedPlatform[] = [
  {
    slug: 'pornhub',
    name: 'Pornhub',
    isNsfw: true,
    regex: [
      /^(https:\/\/)?(www\.)?pornhub.com\/view_video.php\?viewkey=(?<key>[a-z0-9]+)/,
    ],
    videoKeyToUrl: (key) =>
      `https://www.pornhub.com/view_video.php?viewkey=${key}`,
  },
  {
    slug: 'xhamster',
    name: 'xHamster',
    isNsfw: true,
    regex: [
      /^(https:\/\/)?(www\.)?xhamster.com\/videos\/(?<key>[0-9a-zA-Z-]+)/,
    ],
    videoKeyToUrl: (key) => `https://xhamster.com/videos/${key}`,
  },
  {
    slug: 'xvideos',
    name: 'xVideos',
    isNsfw: true,
    regex: [/^(https:\/\/)?(www\.)?xvideos.com\/video\.(?<key>[0-9a-zA-Z-]+)/],
    videoKeyToUrl: (key) => `https://www.xvideos.com/video.${key}/s`,
  },
  {
    slug: 'xnxx',
    name: 'XNXX',
    isNsfw: true,
    regex: [/^(https:\/\/)?(www\.)?xnxx.com\/video-(?<key>[0-9a-zA-Z-]+)/],
    videoKeyToUrl: (key) => `https://www.xnxx.com/video-${key}/s`,
  },
  {
    slug: 'youporn',
    name: 'YouPorn',
    isNsfw: true,
    regex: [/^(https:\/\/)?(www\.)?youporn.com\/watch\/(?<key>[0-9]+)/],
    videoKeyToUrl: (key) => `https://www.youporn.com/watch/${key}`,
  },

  {
    slug: 'twitter',
    name: 'X (Twitter)',
    isNsfw: false,
    regex: [
      /^(https:\/\/)?(www\.)?(x|twitter|fxtwitter|fixvx|xcancel).com\/[a-z0-9]+\/status\/(?<key>[0-9]+)/,
    ],
    videoKeyToUrl: (key) => `https://x.com/anything/status/${key}`,
  },
  {
    slug: 'reddit',
    name: 'Reddit',
    isNsfw: false,
    regex: [
      /^(https:\/\/)?(www\.)?reddit.com\/r\/(?<key>[a-zA-Z0-9-_]+\/comments\/[a-z0-9]+)/,
    ],
    videoKeyToUrl: (key) => `https://www.reddit.com/r/${key}`,
  },

  {
    slug: 'rule34video',
    name: 'Rule34 Video',
    isNsfw: true,
    regex: [/^(https:\/\/)?(www\.)?rule34video.com\/video\/(?<key>[0-9]+)/],
    videoKeyToUrl: (key) => `https://rule34video.com/video/${key}/s`,
  },
]
