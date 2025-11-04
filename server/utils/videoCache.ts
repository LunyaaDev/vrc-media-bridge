import type { VideoId } from '#shared/interfaces/Video'

export const videoCache = new Map<
  VideoId,
  {
    directStreamUrl: string
    expires: Date
  }
>()
