# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [1.1.2](https://github.com/ecomplus/passport-client/compare/v1.1.1...v1.1.2) (2023-01-09)


### Bug Fixes

* **deps:** accept `eventemitter3` v4 and v5 ([70ece44](https://github.com/ecomplus/passport-client/commit/70ece44eb8d67effc9e8e9eaee7d7d7e49b38436))
* **deps:** update dependency eventemitter3 to v5 ([#193](https://github.com/ecomplus/passport-client/issues/193)) ([0d4535b](https://github.com/ecomplus/passport-client/commit/0d4535bf293a0cd6709be15148bf900af13fae9d))

### [1.1.1](https://github.com/ecomplus/passport-client/compare/v1.1.0...v1.1.1) (2021-09-17)


### Bug Fixes

* **check-login:** check for auth and id instead of name (may be empty) ([2d711a6](https://github.com/ecomplus/passport-client/commit/2d711a6bc242e918271de26f7c550ac8d72b09b3))

## [1.1.0](https://github.com/ecomplus/passport-client/compare/v1.0.10...v1.1.0) (2021-09-13)


### Features

* **fetch-login:** new optional `emailCode` param for login with email and verification code ([6e0abb4](https://github.com/ecomplus/passport-client/commit/6e0abb467702144d9597827b0ed11566f7f9adbe))
* **send-email-code:** send verification code by email before login/signup ([9589c2f](https://github.com/ecomplus/passport-client/commit/9589c2fa1d1db281fb6aa001c735798499aae03f))


### Bug Fixes

* **deps:** update dependency eventemitter3 to ^4.0.4 ([#65](https://github.com/ecomplus/passport-client/issues/65)) ([85b19e1](https://github.com/ecomplus/passport-client/commit/85b19e142655c68e7c2d2b1cff3c4287aa1714e1))

### [1.0.10](https://github.com/ecomplus/passport-client/compare/v1.0.9...v1.0.10) (2020-05-16)


### Bug Fixes

* **set-cookie:** save cookie with sameSite=strict ([1ecfb1f](https://github.com/ecomplus/passport-client/commit/1ecfb1f7f21351339e8b712a456829c25bd91cfa))

### [1.0.9](https://github.com/ecomplus/passport-client/compare/v1.0.8...v1.0.9) (2020-04-03)

### [1.0.8](https://github.com/ecomplus/passport-client/compare/v1.0.7...v1.0.8) (2020-04-02)


### Bug Fixes

* **fetch-oauth-providers:** returning passport requst promise ([ba3e2e9](https://github.com/ecomplus/passport-client/commit/ba3e2e99c90ead3836fc9acbd0718e0d614a00d8))

### [1.0.7](https://github.com/ecomplus/passport-client/compare/v1.0.6...v1.0.7) (2020-03-30)


### Bug Fixes

* **iframe:** add name attr for a11y support ([#51](https://github.com/ecomplus/passport-client/issues/51)) ([86771f0](https://github.com/ecomplus/passport-client/commit/86771f096dd2deacbbf61394a2c15ef7be729b28))
* **oauth-popup:** send 'session_uri' param to redirect if no cookie set ([66bfe81](https://github.com/ecomplus/passport-client/commit/66bfe81cca46ad1ad594a976299286820b64047f))

### [1.0.6](https://github.com/ecomclub/ecomplus-passport-client/compare/v1.0.5...v1.0.6) (2020-01-19)


### Bug Fixes

* **request-api:** stop checking verification manually here ([02458ca](https://github.com/ecomclub/ecomplus-passport-client/commit/02458cafc495b91a6317e19d80aeb6117663443c))

### [1.0.5](https://github.com/ecomclub/ecomplus-passport-client/compare/v1.0.4...v1.0.5) (2020-01-08)


### Bug Fixes

* **set-customer:** save self.customer on localStorage ([9465a16](https://github.com/ecomclub/ecomplus-passport-client/commit/9465a16d6a1306626dd3052681548c2f20200633))

### [1.0.4](https://github.com/ecomclub/ecomplus-passport-client/compare/v1.0.3...v1.0.4) (2020-01-07)


### Bug Fixes

* **check-authorization:** make authotization dependent of login ([dd3b5fc](https://github.com/ecomclub/ecomplus-passport-client/commit/dd3b5fc040befd98ff79ef37508b794344f32bec))
* **check-verification:** make verification dependent of authorization ([68b953b](https://github.com/ecomclub/ecomplus-passport-client/commit/68b953b6d67bbf9ef8e82aa74024ffd3d1c1411d))

### [1.0.3](https://github.com/ecomclub/ecomplus-passport-client/compare/v1.0.2...v1.0.3) (2020-01-07)

### [1.0.2](https://github.com/ecomclub/ecomplus-passport-client/compare/v1.0.1...v1.0.2) (2020-01-02)

### [1.0.1](https://github.com/ecomclub/ecomplus-passport-client/compare/v1.0.0...v1.0.1) (2019-12-26)

## [1.0.0](https://github.com/ecomclub/ecomplus-passport-client/compare/v0.7.13...v1.0.0) (2019-12-26)


### ⚠ BREAKING CHANGES

* **events:** edited events payload
* **methods:** removed initSession method
* **methods:** removed isLogged, isAuthorized, isVerified methods
* **webpack:** root export changed
* **exports:** changed default exported object
* **deps:** ecomplus/utils and core-js no more direct dependencies

### build

* **webpack:** fix output var name to ecomPassport ([ac8e455](https://github.com/ecomclub/ecomplus-passport-client/commit/ac8e455d206837a424e62550a0e9eaaa7cc7bfa9))


* **deps:** fix dependencies (peer) ([f654491](https://github.com/ecomclub/ecomplus-passport-client/commit/f654491e18c5835b8762a3c44fdfec000db8a42b))
* **events:** emit login/logout without payload (remove self) ([a6fb8f4](https://github.com/ecomclub/ecomplus-passport-client/commit/a6fb8f4cbf3c03f875c30d07b91298cf0ae8b8de))
* **exports:** returning instance by default ([70848bf](https://github.com/ecomclub/ecomplus-passport-client/commit/70848bfc57fd2ff648817d96481c8bb316f476d8))
* **methods:** renaming boolean methods to checkAny ([4a65ef6](https://github.com/ecomclub/ecomplus-passport-client/commit/4a65ef6718c69febe7b795a96c1af05c081e888f))
* **methods:** renaming initSession to loadStoredSession ([d6eb03e](https://github.com/ecomclub/ecomplus-passport-client/commit/d6eb03eaf2b8b54c49522ec5fd48c933ae98b03d))

### [0.7.13](https://github.com/ecomclub/ecomplus-passport-client/compare/v0.7.12...v0.7.13) (2019-11-17)

### [0.7.12](https://github.com/ecomclub/ecomplus-passport-client/compare/v0.7.11...v0.7.12) (2019-11-14)


### Bug Fixes

* **fetch-orders-list:** fix orders sorting ([345903b](https://github.com/ecomclub/ecomplus-passport-client/commit/345903b58acca3bed17f4901e2d04876b37c5e89))

### [0.7.11](https://github.com/ecomclub/ecomplus-passport-client/compare/v0.7.10...v0.7.11) (2019-11-14)


### Bug Fixes

* **init-session:** just update instance session object on event ([9df8449](https://github.com/ecomclub/ecomplus-passport-client/commit/9df84493540e9eba7fc8088cc6ab2a944d14e1eb))

### [0.7.10](https://github.com/ecomclub/ecomplus-passport-client/compare/v0.7.9...v0.7.10) (2019-11-14)


### Bug Fixes

* **reactive-session:** introduce session update internal event ([d31827b](https://github.com/ecomclub/ecomplus-passport-client/commit/d31827b16f22f7195e12a32ac540cec8c01e2295))
* **set-customer:** limit customer fields to prevent excedent cookie size ([b3c1a60](https://github.com/ecomclub/ecomplus-passport-client/commit/b3c1a60fcbe80367c9162150b77667c3f0850479))

### [0.7.9](https://github.com/ecomclub/ecomplus-passport-client/compare/v0.7.8...v0.7.9) (2019-11-13)


### Bug Fixes

* **request-api:** ensure method is lowercased ([d435bfb](https://github.com/ecomclub/ecomplus-passport-client/commit/d435bfb2ace613198025564cb73a7ec76f6652a1))
* **set-customer:** update cookie value with new customer ([a023bbf](https://github.com/ecomclub/ecomplus-passport-client/commit/a023bbf0504d673046ad6f2e8c3f70f7a4cc91ba))

### [0.7.8](https://github.com/ecomclub/ecomplus-passport-client/compare/v0.7.7...v0.7.8) (2019-11-13)


### Features

* **set-customer:** add new 'setCustomer' method ([e8a9b73](https://github.com/ecomclub/ecomplus-passport-client/commit/e8a9b73fac5737fa6a61847f7d4bba68db3dc5e7))


### Bug Fixes

* **request-api:** also update current session customer object ([42844a2](https://github.com/ecomclub/ecomplus-passport-client/commit/42844a22554bb764fb52c2e2d2cf4d545c855bd1))

### [0.7.7](https://github.com/ecomclub/ecomplus-passport-client/compare/v0.7.6...v0.7.7) (2019-11-13)


### Bug Fixes

* **fetch-orders-list:** must sort orders again due to async results push ([71e419b](https://github.com/ecomclub/ecomplus-passport-client/commit/71e419b5ac2db0a285b77b25121cfd6210dc0522))

### [0.7.6](https://github.com/ecomclub/ecomplus-passport-client/compare/v0.7.5...v0.7.6) (2019-11-13)


### Bug Fixes

* **fetch-orders-list:** sort by order number desc ([f505e77](https://github.com/ecomclub/ecomplus-passport-client/commit/f505e774c5efed6c8b4f790b07d476e5078ba47f))

### [0.7.5](https://github.com/ecomclub/ecomplus-passport-client/compare/v0.7.4...v0.7.5) (2019-10-25)


### Bug Fixes

* **fetch-order:** fix endpoint, start using self.requestApi ([#13](https://github.com/ecomclub/ecomplus-passport-client/issues/13)) ([784e8fe](https://github.com/ecomclub/ecomplus-passport-client/commit/784e8fefc48239958081d315428ad59422599416))
* order resource and access_token ([091829d](https://github.com/ecomclub/ecomplus-passport-client/commit/091829d366a706e7ac764373828060fe0792d8f1))

### [0.7.4](https://github.com/ecomclub/ecomplus-passport-client/compare/v0.7.3...v0.7.4) (2019-10-17)


### Bug Fixes

* push only response data to order list ([#9](https://github.com/ecomclub/ecomplus-passport-client/issues/9)) ([89767f3](https://github.com/ecomclub/ecomplus-passport-client/commit/89767f3edf2c315db955269f49bef420c7d4baea))

### [0.7.3](https://github.com/ecomclub/ecomplus-passport-client/compare/v0.7.2...v0.7.3) (2019-10-03)


### Bug Fixes

* **request-api:** fix checking authorization ([0bf47b5](https://github.com/ecomclub/ecomplus-passport-client/commit/0bf47b5))



### [0.7.2](https://github.com/ecomclub/ecomplus-passport-client/compare/v0.7.1...v0.7.2) (2019-09-25)


### Bug Fixes

* **request-api:** fix url with api prefix and handle token correctly ([a77a3d9](https://github.com/ecomclub/ecomplus-passport-client/commit/a77a3d9))



### [0.7.1](https://github.com/ecomclub/ecomplus-passport-client/compare/v0.7.0...v0.7.1) (2019-08-29)


### Build System

* **webpack:** fix webpack externals default config ([bfa8f7f](https://github.com/ecomclub/ecomplus-passport-client/commit/bfa8f7f))



## [0.7.0](https://github.com/ecomclub/ecomplus-passport-client/compare/v0.6.0...v0.7.0) (2019-08-26)


### Features

* **oauth-iframe:** setup oauth session iframe to create cookies ([6cea93d](https://github.com/ecomclub/ecomplus-passport-client/commit/6cea93d))



## [0.6.0](https://github.com/ecomclub/ecomplus-passport-client/compare/v0.5.0...v0.6.0) (2019-08-25)


### Bug Fixes

* **fetch-oauth-providers:** fix method name (camel case) ([b0c53b8](https://github.com/ecomclub/ecomplus-passport-client/commit/b0c53b8))


### BREAKING CHANGES

* **fetch-oauth-providers:** ftechOAuthProviders no more working (fixed name)



## [0.5.0](https://github.com/ecomclub/ecomplus-passport-client/compare/v0.4.0...v0.5.0) (2019-08-24)


### Bug Fixes

* **constructor:** events are global, set it on constructor ([486be86](https://github.com/ecomclub/ecomplus-passport-client/commit/486be86))
* **constructor:** get store id from config dynamically ([9ab041b](https://github.com/ecomclub/ecomplus-passport-client/commit/9ab041b))
* **get-customer-name:** call getCustomer method correctly ([07a5dbb](https://github.com/ecomclub/ecomplus-passport-client/commit/07a5dbb))


### Features

* **emitter:** emit events with self (instance) as argument ([3443952](https://github.com/ecomclub/ecomplus-passport-client/commit/3443952))


### Tests

* **events:** update handling events (from constructor) ([b719bc0](https://github.com/ecomclub/ecomplus-passport-client/commit/b719bc0))


### BREAKING CHANGES

* **constructor:** instance have no more on, off, once fn



## [0.4.0](https://github.com/ecomclub/ecomplus-passport-client/compare/v0.3.0...v0.4.0) (2019-08-23)


### Bug Fixes

* **fetch:** must use self.storeId to request store and passport api ([298441e](https://github.com/ecomclub/ecomplus-passport-client/commit/298441e))


### chore

* **rest-api:** renaming method to 'restApi' only ([af320af](https://github.com/ecomclub/ecomplus-passport-client/commit/af320af))


### BREAKING CHANGES

* **rest-api:** old 'requestRestApi' no more working



## [0.3.0](https://github.com/ecomclub/ecomplus-passport-client/compare/v0.2.0...v0.3.0) (2019-08-23)


### Bug Fixes

* **fetch-oauth:** fixing fetch methods names and handlers ([fb1eade](https://github.com/ecomclub/ecomplus-passport-client/commit/fb1eade))
* **fetch-orders:** fix names and handle fetch order and orders list ([aeeeb72](https://github.com/ecomclub/ecomplus-passport-client/commit/aeeeb72))
* **get-customer:** fixing get methods names and handlers ([651fd3c](https://github.com/ecomclub/ecomplus-passport-client/commit/651fd3c))
* **logout:** ensure cookie unset ([777926a](https://github.com/ecomclub/ecomplus-passport-client/commit/777926a))
* **logout:** fix unseting cookie ([5d87191](https://github.com/ecomclub/ecomplus-passport-client/commit/5d87191))
* **logout:** return self instance (as a setter) ([8dd4baf](https://github.com/ecomclub/ecomplus-passport-client/commit/8dd4baf))
* **post-login:** fix method to login with email/doc ([ae85bde](https://github.com/ecomclub/ecomplus-passport-client/commit/ae85bde))
* **set-session:** check auth level with isAuthorized ([9ae8521](https://github.com/ecomclub/ecomplus-passport-client/commit/9ae8521))
* **set-session:** save to cookie with expiration time, emit with level ([6ba50dc](https://github.com/ecomclub/ecomplus-passport-client/commit/6ba50dc))
* **state-getters:** handling is authorized and is logged (bools) ([f2311cb](https://github.com/ecomclub/ecomplus-passport-client/commit/f2311cb))


### Features

* **init-session:** try to get stored session, create session id ([b59d84c](https://github.com/ecomclub/ecomplus-passport-client/commit/b59d84c))
* **is-verified:** method to check last authorization level ([a588273](https://github.com/ecomclub/ecomplus-passport-client/commit/a588273))
* **popups:** popup for oauth direct link and login menu ([1c97122](https://github.com/ecomclub/ecomplus-passport-client/commit/1c97122))
* **request-rest-api:** send authenticated request to passport rest api ([ceb0368](https://github.com/ecomclub/ecomplus-passport-client/commit/ceb0368))


### refactor

* **consturctor:** renaming methods, removing unecessary members ([f47705a](https://github.com/ecomclub/ecomplus-passport-client/commit/f47705a))


### Tests

* **fix:** update with new methods ([ccb16f0](https://github.com/ecomclub/ecomplus-passport-client/commit/ccb16f0))


### BREAKING CHANGES

* **consturctor:** methods renamed, old methods will no more work



## 0.2.0 (2019-08-22)


### Bug Fixes

* **list-orders:** fix method to output errors, add pagination ([5bef449](https://github.com/ecomclub/ecomplus-passport-client/commit/5bef449))
* ([#4](https://github.com/ecomclub/ecomplus-passport-client/issues/4)) ([903f47e](https://github.com/ecomclub/ecomplus-passport-client/commit/903f47e))
* customerName method returning display_name property ([1414529](https://github.com/ecomclub/ecomplus-passport-client/commit/1414529))
* edit popup size, height 500, width based on screen width ([9aef895](https://github.com/ecomclub/ecomplus-passport-client/commit/9aef895))


### Build System

* **webpack:** fix lib name and externals config ([a242277](https://github.com/ecomclub/ecomplus-passport-client/commit/a242277))


### Features

* **init:** try to get cookie from session ([dafbeab](https://github.com/ecomclub/ecomplus-passport-client/commit/dafbeab))
* **login:** by email and doc_number ([197a9ea](https://github.com/ecomclub/ecomplus-passport-client/commit/197a9ea))
* **login:** popup with providers list ([5bb241e](https://github.com/ecomclub/ecomplus-passport-client/commit/5bb241e))
* **method:** checks if user is logged ([240fd7d](https://github.com/ecomclub/ecomplus-passport-client/commit/240fd7d))
* **method:** return data from single order ([728d94e](https://github.com/ecomclub/ecomplus-passport-client/commit/728d94e))
* **method:** return list of orders from logged customer ([85f3db2](https://github.com/ecomclub/ecomplus-passport-client/commit/85f3db2))
* **method:** return list of providers ([187cbff](https://github.com/ecomclub/ecomplus-passport-client/commit/187cbff))
* **method:** return user session ([08b40aa](https://github.com/ecomclub/ecomplus-passport-client/commit/08b40aa))
* **method:** set customer session ([2be6bf9](https://github.com/ecomclub/ecomplus-passport-client/commit/2be6bf9))
* **method:** user logout ([48c61f2](https://github.com/ecomclub/ecomplus-passport-client/commit/48c61f2))
* **methods:** edit customer ([73d9fd8](https://github.com/ecomclub/ecomplus-passport-client/commit/73d9fd8))
* **methods:** edit order ([fe09e14](https://github.com/ecomclub/ecomplus-passport-client/commit/fe09e14))
* **methods:** return customer name ([d83ec25](https://github.com/ecomclub/ecomplus-passport-client/commit/d83ec25))
* **methods:** return customer object ([7645bd0](https://github.com/ecomclub/ecomplus-passport-client/commit/7645bd0))
* **methods:** return session object ([7fbc42e](https://github.com/ecomclub/ecomplus-passport-client/commit/7fbc42e))
* login via rest ([e17ab8e](https://github.com/ecomclub/ecomplus-passport-client/commit/e17ab8e))


### Tests

* **constructor:** update constructor name ([45611af](https://github.com/ecomclub/ecomplus-passport-client/commit/45611af))
* lib ([19799a6](https://github.com/ecomclub/ecomplus-passport-client/commit/19799a6))
* lib ([1d6628d](https://github.com/ecomclub/ecomplus-passport-client/commit/1d6628d))
