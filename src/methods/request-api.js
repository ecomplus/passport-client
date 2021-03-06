import { passport } from '@ecomplus/client'

/**
 * @method
 * @name EcomPassport#requestApi
 * @description Send request to E-Com Plus Passport API.
 *
 * @param {string} url - Passport API endpoint
 * @param {string} method - Request HTTP method
 * @param {object} [data] - Request body
 *
 * @returns {Promise<response|error>}
 *
 * @example

ecomPassport.requestApi('/me.json', 'patch', { orders })
  .then(({ data }) => {
    console.log(data)
  })

 */

export default (
  { storeId, session, checkLogin, checkAuthorization, checkVerification, setCustomer },
  emitter,
  [url, method, data]
) => {
  if (method) {
    method = method.toLowerCase()
  } else {
    method = 'get'
  }

  if (!checkLogin()) {
    return Promise.reject(new Error('Unauthenticated, requires login'))
  }
  if (!checkAuthorization()) {
    return Promise.reject(new Error('Unauthorized, requires login with OAuth or doc number'))
  }
  if (url.indexOf('api/') < 0) {
    url = '/api' + (url.charAt(0) === '/' ? url : `/${url}`)
  }

  return passport({
    url,
    storeId,
    customerId: session.auth.id,
    accessToken: session.auth.token && session.auth.token.access_token,
    method,
    data
  }).then(response => {
    if (url.endsWith('/me.json') && method === 'patch') {
      setCustomer(data)
    }
    return response
  })
}
