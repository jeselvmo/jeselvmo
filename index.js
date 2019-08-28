"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toDate = _interopRequireDefault(require("./lib/toDate"));

var _toBoolean = _interopRequireDefault(require("./lib/toBoolean"));

var _isEmail = _interopRequireDefault(require("./lib/isEmail"));

var _isURL = _interopRequireDefault(require("./lib/isURL"));

var _isIP = _interopRequireDefault(require("./lib/isIP"));

var _isBoolean = _interopRequireDefault(require("./lib/isBoolean"));

var _isNumeric = _interopRequireDefault(require("./lib/isNumeric"));

var _isPort = _interopRequireDefault(require("./lib/isPort"));

var _isInt = _interopRequireDefault(require("./lib/isInt"));

var _isHexadecimal = _interopRequireDefault(require("./lib/isHexadecimal"));

var _isHexColor = _interopRequireDefault(require("./lib/isHexColor"));

var _isMD = _interopRequireDefault(require("./lib/isMD5"));

var _isJWT = _interopRequireDefault(require("./lib/isJWT"));

var _isJSON = _interopRequireDefault(require("./lib/isJSON"));

var _isLength = _interopRequireDefault(require("./lib/isLength"));

var _isUUID = _interopRequireDefault(require("./lib/isUUID"));

var _isIn = _interopRequireDefault(require("./lib/isIn"));

var _isBase = _interopRequireDefault(require("./lib/isBase64"));

var _isMimeType = _interopRequireDefault(require("./lib/isMimeType"));

var _isLatLong = _interopRequireDefault(require("./lib/isLatLong"));

var _ltrim = _interopRequireDefault(require("./lib/ltrim"));

var _rtrim = _interopRequireDefault(require("./lib/rtrim"));

var _trim = _interopRequireDefault(require("./lib/trim"));

var _encodeHtml = _interopRequireDefault(require("./lib/encodeHtml"));

var _decodeHtml = _interopRequireDefault(require("./lib/decodeHtml"));

var _htmlEncode = _interopRequireDefault(require("./lib/htmlEncode"));

var _htmlDecode = _interopRequireDefault(require("./lib/htmlDecode"));

var _whitelist = _interopRequireDefault(require("./lib/whitelist"));

var _blacklist = _interopRequireDefault(require("./lib/blacklist"));

var _isWhitelisted = _interopRequireDefault(require("./lib/isWhitelisted"));

var _typeOf = _interopRequireDefault(require("./lib/typeOf"));

var _isType = _interopRequireDefault(require("./lib/isType"));

var _isPhoneNum = _interopRequireDefault(require("./lib/isPhoneNum"));

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

var _parseDate = _interopRequireDefault(require("./lib/parseDate"));

var _formatPassTime = _interopRequireDefault(require("./lib/formatPassTime"));

var _formatRemainTime = _interopRequireDefault(require("./lib/formatRemainTime"));

var _getDayOfWeek = _interopRequireDefault(require("./lib/getDayOfWeek"));

var _getWeek = _interopRequireDefault(require("./lib/getWeek"));

var _formatNum = _interopRequireDefault(require("./lib/formatNum"));

var _digitUppercase = _interopRequireDefault(require("./lib/digitUppercase"));

var _getWindowSize = _interopRequireDefault(require("./lib/getWindowSize"));

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

var _shallowCopy = _interopRequireDefault(require("./lib/shallowCopy"));

var _deepClone = _interopRequireDefault(require("./lib/deepClone"));

var _deepEquals = _interopRequireDefault(require("./lib/deepEquals"));

var _checkPasswordLevel = _interopRequireDefault(require("./lib/checkPasswordLevel"));

var _inherits = _interopRequireDefault(require("./lib/inherits"));

var _delay = _interopRequireDefault(require("./lib/delay"));

var _getKeyName = _interopRequireDefault(require("./lib/getKeyName"));

var _randomColor = _interopRequireDefault(require("./lib/randomColor"));

var _randomNum = _interopRequireDefault(require("./lib/randomNum"));

var _dataURLToBlob = _interopRequireDefault(require("./lib/dataURLToBlob"));

var _blobToDataURL = _interopRequireDefault(require("./lib/blobToDataURL"));

var _readFile = _interopRequireDefault(require("./lib/readFile"));

var _loadUI = _interopRequireDefault(require("./lib/loadUI"));

var _loadEruda = _interopRequireDefault(require("./lib/loadEruda"));

var _initEruda = _interopRequireDefault(require("./lib/initEruda"));

var _times = _interopRequireDefault(require("./lib/times"));

var _repeat = _interopRequireDefault(require("./lib/repeat"));

var _download = _interopRequireDefault(require("./lib/download"));

var _downloadBlob = _interopRequireDefault(require("./lib/downloadBlob"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ////////////////////////////////////////////////////////////////////////
// ADD
// ////////////////////////////////////////////////////////////////////////
// 类型
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
var version = '2.0.1';
var jeselvmo = {
  version: version,
  toDate: _toDate.default,
  toBoolean: _toBoolean.default,
  isEmail: _isEmail.default,
  isURL: _isURL.default,
  isIP: _isIP.default,
  isBoolean: _isBoolean.default,
  isNumeric: _isNumeric.default,
  isPort: _isPort.default,
  isInt: _isInt.default,
  isHexadecimal: _isHexadecimal.default,
  isHexColor: _isHexColor.default,
  isMD5: _isMD.default,
  isJWT: _isJWT.default,
  isJSON: _isJSON.default,
  isLength: _isLength.default,
  isUUID: _isUUID.default,
  isIn: _isIn.default,
  isBase64: _isBase.default,
  isMimeType: _isMimeType.default,
  isLatLong: _isLatLong.default,
  ltrim: _ltrim.default,
  rtrim: _rtrim.default,
  trim: _trim.default,
  encodeHtml: _encodeHtml.default,
  decodeHtml: _decodeHtml.default,
  htmlEncode: _htmlEncode.default,
  htmlDecode: _htmlDecode.default,
  whitelist: _whitelist.default,
  blacklist: _blacklist.default,
  isWhitelisted: _isWhitelisted.default,
  toString: toString,
  // 类型
  typeOf: _typeOf.default,
  isType: _isType.default,
  // validate
  isPhoneNum: _isPhoneNum.default,
  isSameDay: _isSameDay.default,
  isLeapYear: _isLeapYear.default,
  isPrimitive: _isPrimitive.default,
  // date
  formatDate: _formatDate.default,
  parseDate: _parseDate.default,
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
  initEruda: _initEruda.default,
  delay: _delay.default,
  getKeyName: _getKeyName.default,
  randomColor: _randomColor.default,
  randomNum: _randomNum.default,
  dataURLToBlob: _dataURLToBlob.default,
  blobToDataURL: _blobToDataURL.default,
  readFile: _readFile.default,
  clamp: _clamp.default,
  convertRangeValue: _convertRangeValue.default,
  shallowCopy: _shallowCopy.default,
  deepClone: _deepClone.default,
  deepEquals: _deepEquals.default,
  checkPasswordLevel: _checkPasswordLevel.default,
  inherits: _inherits.default,
  times: _times.default,
  repeat: _repeat.default,
  download: _download.default,
  downloadBlob: _downloadBlob.default
};
var _default = jeselvmo;
exports.default = _default;
module.exports = exports.default;
module.exports.default = exports.default;