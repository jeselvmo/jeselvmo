"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toDate = _interopRequireDefault(require("./lib/toDate"));

var _toFloat = _interopRequireDefault(require("./lib/toFloat"));

var _toInt = _interopRequireDefault(require("./lib/toInt"));

var _toBoolean = _interopRequireDefault(require("./lib/toBoolean"));

var _equals = _interopRequireDefault(require("./lib/equals"));

var _contains = _interopRequireDefault(require("./lib/contains"));

var _matches = _interopRequireDefault(require("./lib/matches"));

var _isEmail = _interopRequireDefault(require("./lib/isEmail"));

var _isURL = _interopRequireDefault(require("./lib/isURL"));

var _isMACAddress = _interopRequireDefault(require("./lib/isMACAddress"));

var _isIP = _interopRequireDefault(require("./lib/isIP"));

var _isIPRange = _interopRequireDefault(require("./lib/isIPRange"));

var _isFQDN = _interopRequireDefault(require("./lib/isFQDN"));

var _isBoolean = _interopRequireDefault(require("./lib/isBoolean"));

var _isNumeric = _interopRequireDefault(require("./lib/isNumeric"));

var _isPort = _interopRequireDefault(require("./lib/isPort"));

var _isLowercase = _interopRequireDefault(require("./lib/isLowercase"));

var _isUppercase = _interopRequireDefault(require("./lib/isUppercase"));

var _isAscii = _interopRequireDefault(require("./lib/isAscii"));

var _isFullWidth = _interopRequireDefault(require("./lib/isFullWidth"));

var _isHalfWidth = _interopRequireDefault(require("./lib/isHalfWidth"));

var _isVariableWidth = _interopRequireDefault(require("./lib/isVariableWidth"));

var _isMultibyte = _interopRequireDefault(require("./lib/isMultibyte"));

var _isSurrogatePair = _interopRequireDefault(require("./lib/isSurrogatePair"));

var _isInt = _interopRequireDefault(require("./lib/isInt"));

var _isFloat = _interopRequireWildcard(require("./lib/isFloat"));

var _isDecimal = _interopRequireDefault(require("./lib/isDecimal"));

var _isHexadecimal = _interopRequireDefault(require("./lib/isHexadecimal"));

var _isDivisibleBy = _interopRequireDefault(require("./lib/isDivisibleBy"));

var _isHexColor = _interopRequireDefault(require("./lib/isHexColor"));

var _isMD = _interopRequireDefault(require("./lib/isMD5"));

var _isHash = _interopRequireDefault(require("./lib/isHash"));

var _isJWT = _interopRequireDefault(require("./lib/isJWT"));

var _isJSON = _interopRequireDefault(require("./lib/isJSON"));

var _isEmpty = _interopRequireDefault(require("./lib/isEmpty"));

var _isLength = _interopRequireDefault(require("./lib/isLength"));

var _isByteLength = _interopRequireDefault(require("./lib/isByteLength"));

var _isUUID = _interopRequireDefault(require("./lib/isUUID"));

var _isMongoId = _interopRequireDefault(require("./lib/isMongoId"));

var _isAfter = _interopRequireDefault(require("./lib/isAfter"));

var _isBefore = _interopRequireDefault(require("./lib/isBefore"));

var _isIn = _interopRequireDefault(require("./lib/isIn"));

var _isCreditCard = _interopRequireDefault(require("./lib/isCreditCard"));

var _isIdentityCard = _interopRequireDefault(require("./lib/isIdentityCard"));

var _isMobilePhone = _interopRequireWildcard(require("./lib/isMobilePhone"));

var _isCurrency = _interopRequireDefault(require("./lib/isCurrency"));

var _isBase = _interopRequireDefault(require("./lib/isBase32"));

var _isBase2 = _interopRequireDefault(require("./lib/isBase64"));

var _isDataURI = _interopRequireDefault(require("./lib/isDataURI"));

var _isMagnetURI = _interopRequireDefault(require("./lib/isMagnetURI"));

var _isMimeType = _interopRequireDefault(require("./lib/isMimeType"));

var _isLatLong = _interopRequireDefault(require("./lib/isLatLong"));

var _isPostalCode = _interopRequireWildcard(require("./lib/isPostalCode"));

var _ltrim = _interopRequireDefault(require("./lib/ltrim"));

var _rtrim = _interopRequireDefault(require("./lib/rtrim"));

var _trim = _interopRequireDefault(require("./lib/trim"));

var _escape = _interopRequireDefault(require("./lib/escape"));

var _unescape = _interopRequireDefault(require("./lib/unescape"));

var _stripLow = _interopRequireDefault(require("./lib/stripLow"));

var _whitelist = _interopRequireDefault(require("./lib/whitelist"));

var _blacklist = _interopRequireDefault(require("./lib/blacklist"));

var _isWhitelisted = _interopRequireDefault(require("./lib/isWhitelisted"));

var _normalizeEmail = _interopRequireDefault(require("./lib/normalizeEmail"));

var _kindOf = _interopRequireDefault(require("./lib/kindOf"));

var _hasOwnProperty = _interopRequireDefault(require("./lib/hasOwnProperty"));

var _objectToString = _interopRequireDefault(require("./lib/objectToString"));

var _isPhoneNum = _interopRequireDefault(require("./lib/isPhoneNum"));

var _isIdCard = _interopRequireDefault(require("./lib/isIdCard"));

var _isPrimitive = _interopRequireDefault(require("./lib/isPrimitive"));

var _isSameDay = _interopRequireDefault(require("./lib/isSameDay"));

var _isLeapYear = _interopRequireDefault(require("./lib/isLeapYear"));

var _isIOS = _interopRequireDefault(require("./lib/isIOS"));

var _isAndroid = _interopRequireDefault(require("./lib/isAndroid"));

var _isMobile = _interopRequireDefault(require("./lib/isMobile"));

var _isWin = _interopRequireDefault(require("./lib/isWin"));

var _isLinux = _interopRequireDefault(require("./lib/isLinux"));

var _isMac = _interopRequireDefault(require("./lib/isMac"));

var _isWeiXin = _interopRequireDefault(require("./lib/isWeiXin"));

var _getOS = _interopRequireDefault(require("./lib/getOS"));

var _getPlatform = _interopRequireDefault(require("./lib/getPlatform"));

var _getExplore = _interopRequireDefault(require("./lib/getExplore"));

var _formatDate = _interopRequireDefault(require("./lib/formatDate"));

var _formatPassTime = _interopRequireDefault(require("./lib/formatPassTime"));

var _formatRemainTime = _interopRequireDefault(require("./lib/formatRemainTime"));

var _getDayOfWeek = _interopRequireDefault(require("./lib/getDayOfWeek"));

var _getWeek = _interopRequireDefault(require("./lib/getWeek"));

var _formatNum = _interopRequireDefault(require("./lib/formatNum"));

var _digitUppercase = _interopRequireDefault(require("./lib/digitUppercase"));

var _getWindowSize = _interopRequireDefault(require("./lib/getWindowSize"));

var _getScrollTop = _interopRequireDefault(require("./lib/getScrollTop"));

var _setScrollTop = _interopRequireDefault(require("./lib/setScrollTop"));

var _scrollTo = _interopRequireDefault(require("./lib/scrollTo"));

var _offset = _interopRequireDefault(require("./lib/offset"));

var _parseUrl = _interopRequireDefault(require("./lib/parseUrl"));

var _parseQueryString = _interopRequireDefault(require("./lib/parseQueryString"));

var _toQueryString = _interopRequireDefault(require("./lib/toQueryString"));

var _getQueryString = _interopRequireDefault(require("./lib/getQueryString"));

var _getLocalItem = _interopRequireDefault(require("./lib/getLocalItem"));

var _setLocalItem = _interopRequireDefault(require("./lib/setLocalItem"));

var _removeLocalItem = _interopRequireDefault(require("./lib/removeLocalItem"));

var _getSessionItem = _interopRequireDefault(require("./lib/getSessionItem"));

var _setSessionItem = _interopRequireDefault(require("./lib/setSessionItem"));

var _removeSessionItem = _interopRequireDefault(require("./lib/removeSessionItem"));

var _getCookieItem = _interopRequireDefault(require("./lib/getCookieItem"));

var _setCookieItem = _interopRequireDefault(require("./lib/setCookieItem"));

var _removeCookieItem = _interopRequireDefault(require("./lib/removeCookieItem"));

var _clamp = _interopRequireDefault(require("./lib/clamp"));

var _convertRangeValue = _interopRequireDefault(require("./lib/convertRangeValue"));

var _arrayToHash = _interopRequireDefault(require("./lib/arrayToHash"));

var _shallowCopy = _interopRequireDefault(require("./lib/shallowCopy"));

var _deepClone = _interopRequireDefault(require("./lib/deepClone"));

var _deepEquals = _interopRequireDefault(require("./lib/deepEquals"));

var _debounce = _interopRequireDefault(require("./lib/debounce"));

var _throttle = _interopRequireDefault(require("./lib/throttle"));

var _pad = _interopRequireDefault(require("./lib/pad"));

var _checkPasswordLevel = _interopRequireDefault(require("./lib/checkPasswordLevel"));

var _inherits = _interopRequireDefault(require("./lib/inherits"));

var _md = _interopRequireDefault(require("./lib/md5"));

var _delay = _interopRequireDefault(require("./lib/delay"));

var _getKeyName = _interopRequireDefault(require("./lib/getKeyName"));

var _randomColor = _interopRequireDefault(require("./lib/randomColor"));

var _randomNum = _interopRequireDefault(require("./lib/randomNum"));

var _dataURLtoBlob = _interopRequireDefault(require("./lib/dataURLtoBlob"));

var _blobToDataURL = _interopRequireDefault(require("./lib/blobToDataURL"));

var _loadUI = _interopRequireDefault(require("./lib/loadUI"));

var _loadEruda = _interopRequireDefault(require("./lib/loadEruda"));

var _triggerEruda = _interopRequireDefault(require("./lib/triggerEruda"));

var _findScript = _interopRequireDefault(require("./lib/findScript"));

var _times = _interopRequireDefault(require("./lib/times"));

var _repeat = _interopRequireDefault(require("./lib/repeat"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ////////////////////////////////////////////////////////////////////////
// ADD
// ////////////////////////////////////////////////////////////////////////
// base
// validate
// platform
// date
// number
// dom
// url
// localStorage
// sessionStorage
// cookie
// tools
var version = '2.0.0';
var jeselvmo = {
  version: version,
  toDate: _toDate.default,
  toFloat: _toFloat.default,
  toInt: _toInt.default,
  toBoolean: _toBoolean.default,
  equals: _equals.default,
  contains: _contains.default,
  matches: _matches.default,
  isEmail: _isEmail.default,
  isURL: _isURL.default,
  isMACAddress: _isMACAddress.default,
  isIP: _isIP.default,
  isIPRange: _isIPRange.default,
  isFQDN: _isFQDN.default,
  isBoolean: _isBoolean.default,
  isNumeric: _isNumeric.default,
  isPort: _isPort.default,
  isLowercase: _isLowercase.default,
  isUppercase: _isUppercase.default,
  isAscii: _isAscii.default,
  isFullWidth: _isFullWidth.default,
  isHalfWidth: _isHalfWidth.default,
  isVariableWidth: _isVariableWidth.default,
  isMultibyte: _isMultibyte.default,
  isSurrogatePair: _isSurrogatePair.default,
  isInt: _isInt.default,
  isFloat: _isFloat.default,
  isFloatLocales: _isFloat.locales,
  isDecimal: _isDecimal.default,
  isHexadecimal: _isHexadecimal.default,
  isDivisibleBy: _isDivisibleBy.default,
  isHexColor: _isHexColor.default,
  isMD5: _isMD.default,
  isHash: _isHash.default,
  isJWT: _isJWT.default,
  isJSON: _isJSON.default,
  isEmpty: _isEmpty.default,
  isLength: _isLength.default,
  isByteLength: _isByteLength.default,
  isUUID: _isUUID.default,
  isMongoId: _isMongoId.default,
  isAfter: _isAfter.default,
  isBefore: _isBefore.default,
  isIn: _isIn.default,
  isCreditCard: _isCreditCard.default,
  isIdentityCard: _isIdentityCard.default,
  isMobilePhone: _isMobilePhone.default,
  isMobilePhoneLocales: _isMobilePhone.locales,
  isPostalCode: _isPostalCode.default,
  isPostalCodeLocales: _isPostalCode.locales,
  isCurrency: _isCurrency.default,
  isBase32: _isBase.default,
  isBase64: _isBase2.default,
  isDataURI: _isDataURI.default,
  isMagnetURI: _isMagnetURI.default,
  isMimeType: _isMimeType.default,
  isLatLong: _isLatLong.default,
  ltrim: _ltrim.default,
  rtrim: _rtrim.default,
  trim: _trim.default,
  escape: _escape.default,
  unescape: _unescape.default,
  stripLow: _stripLow.default,
  whitelist: _whitelist.default,
  // 保留白名单中的字符
  blacklist: _blacklist.default,
  // 删除黑名单中的字符
  isWhitelisted: _isWhitelisted.default,
  normalizeEmail: _normalizeEmail.default,
  toString: toString,
  // base
  kindOf: _kindOf.default,
  hasOwnProperty: _hasOwnProperty.default,
  objectToString: _objectToString.default,
  // validate
  isPhoneNum: _isPhoneNum.default,
  isIdCard: _isIdCard.default,
  isSameDay: _isSameDay.default,
  isLeapYear: _isLeapYear.default,
  isPrimitive: _isPrimitive.default,
  // date
  formatDate: _formatDate.default,
  formatPassTime: _formatPassTime.default,
  formatRemainTime: _formatRemainTime.default,
  getDayOfWeek: _getDayOfWeek.default,
  getWeek: _getWeek.default,
  // number
  formatNum: _formatNum.default,
  digitUppercase: _digitUppercase.default,
  // system
  isIOS: _isIOS.default,
  isAndroid: _isAndroid.default,
  isMobile: _isMobile.default,
  isWin: _isWin.default,
  isLinux: _isLinux.default,
  isMac: _isMac.default,
  isWeiXin: _isWeiXin.default,
  // platform
  getOS: _getOS.default,
  getPlatform: _getPlatform.default,
  getExplore: _getExplore.default,
  // web
  getWindowSize: _getWindowSize.default,
  getScrollTop: _getScrollTop.default,
  setScrollTop: _setScrollTop.default,
  scrollTo: _scrollTo.default,
  offset: _offset.default,
  // url
  parseUrl: _parseUrl.default,
  parseQueryString: _parseQueryString.default,
  toQueryString: _toQueryString.default,
  getQueryString: _getQueryString.default,
  // localStorage
  getLocalItem: _getLocalItem.default,
  setLocalItem: _setLocalItem.default,
  removeLocalItem: _removeLocalItem.default,
  // sessionStorage
  getSessionItem: _getSessionItem.default,
  setSessionItem: _setSessionItem.default,
  removeSessionItem: _removeSessionItem.default,
  // cookie
  getCookieItem: _getCookieItem.default,
  setCookieItem: _setCookieItem.default,
  removeCookieItem: _removeCookieItem.default,
  // others
  loadUI: _loadUI.default,
  loadEruda: _loadEruda.default,
  triggerEruda: _triggerEruda.default,
  findScript: _findScript.default,
  md5: _md.default,
  delay: _delay.default,
  getKeyName: _getKeyName.default,
  randomColor: _randomColor.default,
  randomNum: _randomNum.default,
  dataURLtoBlob: _dataURLtoBlob.default,
  blobToDataURL: _blobToDataURL.default,
  clamp: _clamp.default,
  convertRangeValue: _convertRangeValue.default,
  arrayToHash: _arrayToHash.default,
  shallowCopy: _shallowCopy.default,
  deepClone: _deepClone.default,
  deepEquals: _deepEquals.default,
  debounce: _debounce.default,
  throttle: _throttle.default,
  pad: _pad.default,
  checkPasswordLevel: _checkPasswordLevel.default,
  inherits: _inherits.default,
  times: _times.default,
  repeat: _repeat.default
};
var _default = jeselvmo;
exports.default = _default;
module.exports = exports.default;
module.exports.default = exports.default;