/**
 * redirect if link is like `/?u=`
 */
export default defineEventHandler(async (event) => {
  const url = getRequestURL(event)
  if (url.pathname !== '/') return

  const query = getQuery(event)
  const u = query['u']
  if (!u) return

  return sendRedirect(
    event,
    `/api/videoProxy?u=${encodeURIComponent(u as string)}`,
  )
})
