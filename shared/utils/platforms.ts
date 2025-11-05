import type { SupportedPlatform } from '../interfaces/Video'

export const supportedPlatforms = {
  pornhub: <SupportedPlatform>{
    name: 'Pornhub',
    regex: [
      /^(https:\/\/)?(www\.)?pornhub.com\/view_video.php\?viewkey=(?<key>[a-z0-9]+)/,
    ],
    videoKeyToUrl: (key) =>
      `https://www.pornhub.com/view_video.php?viewkey=${key}`,
  },

  xhamster: <SupportedPlatform>{
    name: 'xHamster',
    regex: [
      /^(https:\/\/)?(www\.)?xhamster.com\/videos\/(?<key>[0-9a-zA-Z-]+)/,
    ],
    videoKeyToUrl: (key) => `https://xhamster.com/videos/${key}`,
  },

  xvideos: <SupportedPlatform>{
    name: 'xVideos',
    regex: [/^(https:\/\/)?(www\.)?xvideos.com\/video\.(?<key>[0-9a-zA-Z-]+)/],
    videoKeyToUrl: (key) => `https://www.xvideos.com/video.${key}/s`,
  },

  xnxx: <SupportedPlatform>{
    name: 'XNXX',
    regex: [/^(https:\/\/)?(www\.)?xnxx.com\/video-(?<key>[0-9a-zA-Z-]+)/],
    videoKeyToUrl: (key) => `https://www.xnxx.com/video-${key}/s`,
  },

  youporn: <SupportedPlatform>{
    name: 'YouPorn',
    regex: [/^(https:\/\/)?(www\.)?youporn.com\/watch\/(?<key>[0-9]+)/],

    videoKeyToUrl: (key) => `https://www.youporn.com/watch/${key}`,
  },

  twitter: <SupportedPlatform>{
    name: 'X (Twitter)',
    regex: [
      /^(https:\/\/)?(www\.)?(x|twitter|fxtwitter|fixvx).com\/[a-z0-9]+\/status\/(?<key>[0-9]+)/,
    ],
    videoKeyToUrl: (key) => `https://x.com/anything/status/${key}`,
  },

  rule34video: <SupportedPlatform>{
    name: 'Rule34 Video',
    regex: [/^(https:\/\/)?(www\.)?rule34video.com\/video\/(?<key>[0-9]+)/],
    videoKeyToUrl: (key) => `https://rule34video.com/video/${key}/s`,
  },
}
