import type { supportedPlatforms } from '../utils/platforms'

export interface SupportedPlatform {
  name: string
  isNsfw: boolean
  regex: RegExp[]
  examples?: string[]

  videoKeyToUrl: (key: string) => string
}

export type VideoId = `${Platform}:${string}`
export type Platform = keyof typeof supportedPlatforms
