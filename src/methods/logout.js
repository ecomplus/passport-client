import setCookie from './../lib/set-cookie'

/**
 * @method
 * @name EcomPassport#logout
 * @description Reset session and customer account object.
 *
 * @param {boolean} [canSave=true] - Save (reset) cookie and localStorage after logout
 *
 * @returns {self}
 *
 * @example

ecomPassport.logout()

 */

export default (self, emitter, [canSave = true]) => {
  const { document, storageKey, localStorage } = self

  self.session = {}
  self.customer = {}
  if (canSave && storageKey) {
    if (document) {
      setCookie(document, storageKey, '', -1)
    }
    if (localStorage) {
      localStorage.removeItem(storageKey)
    }
  }

  /**
   * @event EcomPassport#logout
   * @example ecomPassport.on('logout', () => {
   *   console.log(ecomPassport.checkLogin()) // false
   * })
   */
  emitter.emit('logout')

  return self
}
