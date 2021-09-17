/**
 * @method
 * @name EcomPassport#checkLogin
 * @description Check if customer is identified (does not validate authentication).
 *
 * @returns {boolean}
 *
 * @example

ecomPassport.checkLogin()

 */

export default ({ session }) => Boolean(session.auth && session.auth.id)
