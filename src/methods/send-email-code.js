import { passport } from '@ecomplus/client'

/**
 * @method
 * @name EcomPassport#sendEmailCode
 * @description Send verification code by email before login/signup.
 *
 * @param {string} email - Customer main email address
 *
 * @returns {Promise<response|error>}
 *
 * @example

ecomPassport.sendEmailCode('example@mail.com')
  .catch(console.error)

 */

export default ({ storeId, lang }, emitter, [email]) => passport({
  url: `/${lang}/email-code`,
  storeId,
  method: 'PUT',
  data: {
    email
  }
})
