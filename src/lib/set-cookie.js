export default (document, cname, cvalue, exdays) => {
  const d = new Date()
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000))
  const expires = 'expires=' + d.toUTCString()
  const updatedCookie = cname + '=' + cvalue + '; ' + expires + '; path=/'
  if (document.documentMode) {
    // IE 8~11
    document.cookie = updatedCookie
  } else {
    document.cookie = updatedCookie + '; samesite=strict'
  }
}
