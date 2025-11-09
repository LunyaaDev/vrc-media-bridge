export function getConfig() {
  // @ts-expect-error only available while running from app or server handler
  const config = useRuntimeConfig()
  return {
    enableNsfw: config.public.enableNsfw,
  }
}
