import type { SupportedPlatform } from '../interfaces/Video'

export const supportedPlatforms = {
  pornhub: <SupportedPlatform>{
    name: 'Pornhub',
    urls: [
      {
        regex:
          /^https:\/\/(www\.)?pornhub.com\/view_video.php\?viewkey=(?<key>[a-z0-9]+)/,
        examples: [],
      },
    ],
    videoKeyToUrl: (key) =>
      `https://www.pornhub.com/view_video.php?viewkey=${key}`,
  },
  twitter: <SupportedPlatform>{
    name: 'X / Twitter',
    urls: [
      {
        regex:
          /^https:\/\/(x|twitter|fxtwitter).com\/[a-z0-9]+\/status\/(?<key>[0-9]+)/,
        examples: [],
      },
    ],
    videoKeyToUrl: (key) => `https://x.com/anything/status/${key}`,
  },
}
