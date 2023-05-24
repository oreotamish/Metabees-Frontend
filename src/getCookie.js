import jwtDecode from 'jwt-decode'

export default function getCookieByName(name) {
  const pattern = RegExp(name + '=.[^;]*')
  const matched = document.cookie.match(pattern)
  if (matched) {
    const cookie = matched[0].split('=')
    console.log(cookie[1])
    return cookie[1]
  }
  return null
}

export function getCookieInfo() {
  try {
    let token = getCookieByName('aToken')
    const decodedToken = jwtDecode(token)
    console.log(decodedToken.id)
    return decodedToken.id
  } catch (e) {
    console.log(e)
  }
  return false
}
