import { $ecomConfig } from '@ecomplus/utils'
import * as EventEmitter from 'eventemitter3'

import loadStoredSession from './methods/load-stored-session'
import setSession from './methods/set-session'
import setCustomer from './methods/set-customer'
import getCustomerName from './methods/get-customer-name'
import getCustomer from './methods/get-customer'
import fetchOauthProfile from './methods/fetch-oauth-profile'
import fetchOauthProviders from './methods/fetch-oauth-providers'
import fetchLogin from './methods/fetch-login'
import fetchOrdersList from './methods/fetch-orders-list'
import fetchOrder from './methods/fetch-order'
import checkLogin from './methods/check-login'
import checkAuthorization from './methods/check-authorization'
import checkVerification from './methods/check-verification'
import logout from './methods/logout'
import popupOauthLink from './methods/popup-oauth-link'
import popupLogin from './methods/popup-login'
import sendEmailCode from './methods/send-email-code'
import requestApi from './methods/request-api'

/**
 * Construct a new customer account instance object.
 * @constructor
 * @param {number} [storeId=$ecomConfig.get('store_id')] - Preset Store ID number
 * @param {string} [lang=$ecomConfig.get('lang')] - Snake case language code
 * @param {string|null} [storageKey] - Item key to persist account data
 * @param {object} [localStorage=window.localStorage] -
 * [Local Storage interface]{@link https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage}
 * @param {object} [document=window.document] - Object reference to
 * [document]{@link https://developer.mozilla.org/en-US/docs/Web/API/Window/document}
 *
 * @example

// Default instance
const ecomPassport = new EcomPassport()

 * @example

// Optionally defining Store ID, lang and custom storage key
const storeId = 2000
const lang = 'en_us'
const storageKey = 'myPassportKey'
const customEcomPassport = new EcomPassport(storeId, lang, storageKey)

 */

const EcomPassport = function (
  storeId,
  lang,
  storageKey = 'ecomPassportClient',
  localStorage = typeof window === 'object' && window.localStorage,
  document = typeof window === 'object' && window.document
) {
  const ecomPassport = this

  /**
   * Construct a new account instance object.
   * @memberof EcomPassport
   * @type {function}
   * @see EcomPassport
   */
  ecomPassport.Constructor = EcomPassport

  /**
   * Respective Store ID number.
   * @memberof EcomPassport
   * @type {number}
   */
  ecomPassport.storeId = storeId || $ecomConfig.get('store_id')

  /**
   * Instance language code.
   * @memberof EcomPassport
   * @type {string}
   */
  ecomPassport.lang = lang || $ecomConfig.get('lang')

  /**
   * Item key to persist JSON {@link EcomPassport#customer}
   * with [localStorage]{@link EcomPassport#localStorage}
   * and cookie name to persist {@link EcomPassport#session}.
   * @memberof EcomPassport
   * @type {string|null}
   */
  ecomPassport.storageKey = storageKey

  /**
   * [Storage interface]{@link https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage}.
   * @memberof EcomPassport
   * @type {object}
   */
  ecomPassport.localStorage = localStorage

  /**
   * [Window document]{@link https://developer.mozilla.org/en-US/docs/Web/API/Window/document}.
   * @memberof EcomPassport
   * @type {object}
   */
  ecomPassport.document = document

  /**
   * Customer account data following
   * {@link https://developers.e-com.plus/docs/api/#/store/customers E-Com Plus customer object model}.
   * @memberof EcomPassport
   * @type {object}
   */
  ecomPassport.customer = {}

  /**
   * Passport authentication session object.
   * @memberof EcomPassport
   * @type {object}
   */
  ecomPassport.session = {}

  /**
   * Passport random 32 chars session ID.
   * @memberof EcomPassport
   * @type {object}
   */
  ecomPassport.sessionId = ''
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  for (let i = 0; i < 32; i++) {
    ecomPassport.sessionId += possible.charAt(Math.floor(Math.random() * possible.length))
  }

  const emitter = new EventEmitter()
  ;['on', 'off', 'once'].forEach(method => {
    ecomPassport[method] = (ev, fn) => {
      emitter[method](ev, fn)
    }
  })

  const methodsMiddleware = (method, args = [], emitChange) => {
    const result = method(ecomPassport, emitter, args)
    if (result && emitChange) {
      const { customer } = ecomPassport

      /**
       * @event EcomPassport#change
       * @type {object}
       * @property {object} customer - Customer account data
       * @example ecomCart.on('change', ({ customer }) => { console.log(customer._id) })
       */
      emitter.emit('change', { customer })
    }
    return result
  }

  this.loadStoredSession = () => methodsMiddleware(loadStoredSession, [], true)

  this.logout = canSave => methodsMiddleware(logout, [canSave], true)

  this.setSession = (session, canSave) => methodsMiddleware(setSession, [session, canSave], true)

  this.setCustomer = (customer, canSave) => methodsMiddleware(setCustomer, [customer, canSave], true)

  this.getCustomerName = () => methodsMiddleware(getCustomerName)

  this.getCustomer = () => methodsMiddleware(getCustomer)

  this.checkLogin = () => methodsMiddleware(checkLogin)

  this.checkAuthorization = () => methodsMiddleware(checkAuthorization)

  this.checkVerification = () => methodsMiddleware(checkVerification)

  this.fetchLogin = (email, docNumber, emailCode) => methodsMiddleware(fetchLogin, [email, docNumber, emailCode])

  this.fetchOauthProfile = () => methodsMiddleware(fetchOauthProfile)

  this.fetchOauthProviders = () => methodsMiddleware(fetchOauthProviders)

  this.fetchOrdersList = (from, size) => methodsMiddleware(fetchOrdersList, [from, size])

  this.fetchOrder = orderId => methodsMiddleware(fetchOrder, [orderId])

  this.requestApi = (url, method, data) => methodsMiddleware(requestApi, [url, method, data])

  this.popupOauthLink = url => methodsMiddleware(popupOauthLink, [url])

  this.popupLogin = (enableSkip, baseUri) => methodsMiddleware(popupLogin, [enableSkip, baseUri])

  this.sendEmailCode = email => methodsMiddleware(sendEmailCode, [email])

  loadStoredSession(ecomPassport)
}

export default EcomPassport
