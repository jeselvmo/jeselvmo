'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toDate = require('./toDate');

var _toDate2 = _interopRequireDefault(_toDate);

var _toFloat = require('./toFloat');

var _toFloat2 = _interopRequireDefault(_toFloat);

var _toInt = require('./toInt');

var _toInt2 = _interopRequireDefault(_toInt);

var _toBoolean = require('./toBoolean');

var _toBoolean2 = _interopRequireDefault(_toBoolean);

var _equals = require('./equals');

var _equals2 = _interopRequireDefault(_equals);

var _contains = require('./contains');

var _contains2 = _interopRequireDefault(_contains);

var _matches = require('./matches');

var _matches2 = _interopRequireDefault(_matches);

var _isEmail = require('./isEmail');

var _isEmail2 = _interopRequireDefault(_isEmail);

var _isURL = require('./isURL');

var _isURL2 = _interopRequireDefault(_isURL);

var _isMACAddress = require('./isMACAddress');

var _isMACAddress2 = _interopRequireDefault(_isMACAddress);

var _isIP = require('./isIP');

var _isIP2 = _interopRequireDefault(_isIP);

var _isFQDN = require('./isFQDN');

var _isFQDN2 = _interopRequireDefault(_isFQDN);

var _isBoolean = require('./isBoolean');

var _isBoolean2 = _interopRequireDefault(_isBoolean);

var _isAlpha = require('./isAlpha');

var _isAlpha2 = _interopRequireDefault(_isAlpha);

var _isAlphanumeric = require('./isAlphanumeric');

var _isAlphanumeric2 = _interopRequireDefault(_isAlphanumeric);

var _isNumeric = require('./isNumeric');

var _isNumeric2 = _interopRequireDefault(_isNumeric);

var _isPort = require('./isPort');

var _isPort2 = _interopRequireDefault(_isPort);

var _isLowercase = require('./isLowercase');

var _isLowercase2 = _interopRequireDefault(_isLowercase);

var _isUppercase = require('./isUppercase');

var _isUppercase2 = _interopRequireDefault(_isUppercase);

var _isAscii = require('./isAscii');

var _isAscii2 = _interopRequireDefault(_isAscii);

var _isFullWidth = require('./isFullWidth');

var _isFullWidth2 = _interopRequireDefault(_isFullWidth);

var _isHalfWidth = require('./isHalfWidth');

var _isHalfWidth2 = _interopRequireDefault(_isHalfWidth);

var _isVariableWidth = require('./isVariableWidth');

var _isVariableWidth2 = _interopRequireDefault(_isVariableWidth);

var _isMultibyte = require('./isMultibyte');

var _isMultibyte2 = _interopRequireDefault(_isMultibyte);

var _isSurrogatePair = require('./isSurrogatePair');

var _isSurrogatePair2 = _interopRequireDefault(_isSurrogatePair);

var _isInt = require('./isInt');

var _isInt2 = _interopRequireDefault(_isInt);

var _isFloat = require('./isFloat');

var _isFloat2 = _interopRequireDefault(_isFloat);

var _isDecimal = require('./isDecimal');

var _isDecimal2 = _interopRequireDefault(_isDecimal);

var _isHexadecimal = require('./isHexadecimal');

var _isHexadecimal2 = _interopRequireDefault(_isHexadecimal);

var _isDivisibleBy = require('./isDivisibleBy');

var _isDivisibleBy2 = _interopRequireDefault(_isDivisibleBy);

var _isHexColor = require('./isHexColor');

var _isHexColor2 = _interopRequireDefault(_isHexColor);

var _isISRC = require('./isISRC');

var _isISRC2 = _interopRequireDefault(_isISRC);

var _isMD = require('./isMD5');

var _isMD2 = _interopRequireDefault(_isMD);

var _isHash = require('./isHash');

var _isHash2 = _interopRequireDefault(_isHash);

var _isJSON = require('./isJSON');

var _isJSON2 = _interopRequireDefault(_isJSON);

var _isEmpty = require('./isEmpty');

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _isLength = require('./isLength');

var _isLength2 = _interopRequireDefault(_isLength);

var _isByteLength = require('./isByteLength');

var _isByteLength2 = _interopRequireDefault(_isByteLength);

var _isUUID = require('./isUUID');

var _isUUID2 = _interopRequireDefault(_isUUID);

var _isMongoId = require('./isMongoId');

var _isMongoId2 = _interopRequireDefault(_isMongoId);

var _isAfter = require('./isAfter');

var _isAfter2 = _interopRequireDefault(_isAfter);

var _isBefore = require('./isBefore');

var _isBefore2 = _interopRequireDefault(_isBefore);

var _isIn = require('./isIn');

var _isIn2 = _interopRequireDefault(_isIn);

var _isCreditCard = require('./isCreditCard');

var _isCreditCard2 = _interopRequireDefault(_isCreditCard);

var _isISIN = require('./isISIN');

var _isISIN2 = _interopRequireDefault(_isISIN);

var _isISBN = require('./isISBN');

var _isISBN2 = _interopRequireDefault(_isISBN);

var _isISSN = require('./isISSN');

var _isISSN2 = _interopRequireDefault(_isISSN);

var _isMobilePhone = require('./isMobilePhone');

var _isMobilePhone2 = _interopRequireDefault(_isMobilePhone);

var _isCurrency = require('./isCurrency');

var _isCurrency2 = _interopRequireDefault(_isCurrency);

var _isISO = require('./isISO8601');

var _isISO2 = _interopRequireDefault(_isISO);

var _isISO31661Alpha = require('./isISO31661Alpha2');

var _isISO31661Alpha2 = _interopRequireDefault(_isISO31661Alpha);

var _isBase = require('./isBase64');

var _isBase2 = _interopRequireDefault(_isBase);

var _isDataURI = require('./isDataURI');

var _isDataURI2 = _interopRequireDefault(_isDataURI);

var _isLatLong = require('./isLatLong');

var _isLatLong2 = _interopRequireDefault(_isLatLong);

var _isPostalCode = require('./isPostalCode');

var _isPostalCode2 = _interopRequireDefault(_isPostalCode);

var _ltrim = require('./ltrim');

var _ltrim2 = _interopRequireDefault(_ltrim);

var _rtrim = require('./rtrim');

var _rtrim2 = _interopRequireDefault(_rtrim);

var _trim = require('./trim');

var _trim2 = _interopRequireDefault(_trim);

var _escape = require('./escape');

var _escape2 = _interopRequireDefault(_escape);

var _unescape = require('./unescape');

var _unescape2 = _interopRequireDefault(_unescape);

var _stripLow = require('./stripLow');

var _stripLow2 = _interopRequireDefault(_stripLow);

var _whitelist = require('./whitelist');

var _whitelist2 = _interopRequireDefault(_whitelist);

var _blacklist = require('./blacklist');

var _blacklist2 = _interopRequireDefault(_blacklist);

var _isWhitelisted = require('./isWhitelisted');

var _isWhitelisted2 = _interopRequireDefault(_isWhitelisted);

var _normalizeEmail = require('./normalizeEmail');

var _normalizeEmail2 = _interopRequireDefault(_normalizeEmail);

var _toString = require('./util/toString');

var _toString2 = _interopRequireDefault(_toString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var version = '9.1.1';

var validator = {
  version: version,
  toDate: _toDate2.default,
  toFloat: _toFloat2.default,
  toInt: _toInt2.default,
  toBoolean: _toBoolean2.default,
  equals: _equals2.default,
  contains: _contains2.default,
  matches: _matches2.default,
  isEmail: _isEmail2.default,
  isURL: _isURL2.default,
  isMACAddress: _isMACAddress2.default,
  isIP: _isIP2.default,
  isFQDN: _isFQDN2.default,
  isBoolean: _isBoolean2.default,
  isAlpha: _isAlpha2.default,
  isAlphanumeric: _isAlphanumeric2.default,
  isNumeric: _isNumeric2.default,
  isPort: _isPort2.default,
  isLowercase: _isLowercase2.default,
  isUppercase: _isUppercase2.default,
  isAscii: _isAscii2.default,
  isFullWidth: _isFullWidth2.default,
  isHalfWidth: _isHalfWidth2.default,
  isVariableWidth: _isVariableWidth2.default,
  isMultibyte: _isMultibyte2.default,
  isSurrogatePair: _isSurrogatePair2.default,
  isInt: _isInt2.default,
  isFloat: _isFloat2.default,
  isDecimal: _isDecimal2.default,
  isHexadecimal: _isHexadecimal2.default,
  isDivisibleBy: _isDivisibleBy2.default,
  isHexColor: _isHexColor2.default,
  isISRC: _isISRC2.default,
  isMD5: _isMD2.default,
  isHash: _isHash2.default,
  isJSON: _isJSON2.default,
  isEmpty: _isEmpty2.default,
  isLength: _isLength2.default,
  isByteLength: _isByteLength2.default,
  isUUID: _isUUID2.default,
  isMongoId: _isMongoId2.default,
  isAfter: _isAfter2.default,
  isBefore: _isBefore2.default,
  isIn: _isIn2.default,
  isCreditCard: _isCreditCard2.default,
  isISIN: _isISIN2.default,
  isISBN: _isISBN2.default,
  isISSN: _isISSN2.default,
  isMobilePhone: _isMobilePhone2.default,
  isPostalCode: _isPostalCode2.default,
  isCurrency: _isCurrency2.default,
  isISO8601: _isISO2.default,
  isISO31661Alpha2: _isISO31661Alpha2.default,
  isBase64: _isBase2.default,
  isDataURI: _isDataURI2.default,
  isLatLong: _isLatLong2.default,
  ltrim: _ltrim2.default,
  rtrim: _rtrim2.default,
  trim: _trim2.default,
  escape: _escape2.default,
  unescape: _unescape2.default,
  stripLow: _stripLow2.default,
  whitelist: _whitelist2.default,
  blacklist: _blacklist2.default,
  isWhitelisted: _isWhitelisted2.default,
  normalizeEmail: _normalizeEmail2.default,
  toString: _toString2.default
};

exports.default = validator;
module.exports = exports['default'];