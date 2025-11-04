import { urlToId } from '#shared/utils/urlToId'

export default defineEventHandler(async (event) => {
  // get videoId
  const urlIn = <string>getQuery(event).u
  const videoId = urlToId(urlIn)
  console.log(videoId)

  // no videoId => url invalid
  if (!videoId) {
    setResponseStatus(event, 404)
    return 'Not Found'
  }

  // get direct stream link from videoId
  const videoLink = await getVideoDirectLink(videoId)
  console.log(videoLink)

  // no video link => video not found on remote platform
  if (!videoLink) {
    setResponseStatus(event, 404)
    return 'Not Found'
  }

  // redirect user to video
  return sendRedirect(event, videoLink, 302)
})
