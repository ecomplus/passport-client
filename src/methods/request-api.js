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
  let isApiV2
  try {
    const { ECOMCLIENT_API_PASSPORT } = (typeof window === 'object' && window) ||
      (typeof process === 'object' && process && process.env) ||
      {}
    isApiV2 = Boolean(ECOMCLIENT_API_PASSPORT && ECOMCLIENT_API_PASSPORT.startsWith('https://ecomplus.io/v2/'))
  } catch {
    //
  }
  if (isApiV2) {
    if (url.indexOf('api/') >= 0) {
      url = url.replace(/\/?api\//, '')
    }
    if (url.endsWith('/me.json')) {
      url = url.replace('/me.json', `/customers/${session.auth.id}`)
    }
  } else if (url.indexOf('api/') < 0) {
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
    if (
      method === 'patch' &&
      (url.endsWith('/me.json') || url.indexOf(`/customers/${session.auth.id}`) >= 0)
    ) {
      setCustomer(data)
    }
    return response
  })
}
