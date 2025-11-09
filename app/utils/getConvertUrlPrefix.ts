export const getConvertUrlPrefix = () => {
  if (import.meta.server) return ''
  return `${location.origin}/?u=`
}
