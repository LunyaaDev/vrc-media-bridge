export interface SupportedPlatform {
  slug: string
  name: string
  isNsfw: boolean
  regex: RegExp[]
  examples?: string[]

  videoKeyToUrl: (key: string) => string
}

export type VideoId = `${string}:${string}`
