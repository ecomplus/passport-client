import { passport } from '@ecomplus/client'

/**
 * @method
 * @name EcomPassport#fetchLogin
 * @description Try to identify/login user with email and doc number.
 *
 * @param {string} email - Customer main email address
 * @param {string} [docNumber] - Customer document number
 * @param {string} [emailCode] - Email verification code
 *
 * @returns {Promise<session|error>}
 *
 * @example

// Account identification only
ecomPassport.fetchLogin('example@mail.com')

// Partial authorization with email + doc number
ecomPassport.fetchLogin('example@mail.com', '1234567890')

// Full authorization with verification code received by email
ecomPassport.fetchLogin('example@mail.com', null, 123456)

 */

export default ({ storeId, setSession }, emitter, [email, docNumber = null, emailCode = null]) => passport({
  url: '/identify.json',
  storeId,
  method: 'POST',
  data: {
    email,
    doc_number: docNumber,
    email_code: emailCode
  }
}).then(({ data }) => {
  setSession(data)
  return data
})
