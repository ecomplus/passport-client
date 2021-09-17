/**
 * @method
 * @name EcomPassport#checkAuthorization
 * @description Check session auth level (does not validate token).
 *
 * @returns {boolean}
 *
 * @example

ecomPassport.checkAuthorization()

 */

export default ({ session, checkLogin }) => {
  return Boolean(checkLogin() && session.auth.level >= 2)
}
