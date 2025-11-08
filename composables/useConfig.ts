export function useConfig() {
  const config = useRuntimeConfig()
  return {
    enableNsfw: config.public.enableNsfw,
  }
}
