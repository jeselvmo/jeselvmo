import toDate from './lib/toDate';
import toFloat from './lib/toFloat';
import toInt from './lib/toInt';
import toBoolean from './lib/toBoolean';
import equals from './lib/equals';
import contains from './lib/contains';
import matches from './lib/matches';

import isEmail from './lib/isEmail';
import isURL from './lib/isURL';
import isMACAddress from './lib/isMACAddress';
import isIP from './lib/isIP';
import isIPRange from './lib/isIPRange';
import isFQDN from './lib/isFQDN';

import isBoolean from './lib/isBoolean';

import isNumeric from './lib/isNumeric';
import isPort from './lib/isPort';
import isLowercase from './lib/isLowercase';
import isUppercase from './lib/isUppercase';

import isAscii from './lib/isAscii';
import isFullWidth from './lib/isFullWidth';
import isHalfWidth from './lib/isHalfWidth';
import isVariableWidth from './lib/isVariableWidth';
import isMultibyte from './lib/isMultibyte';
import isSurrogatePair from './lib/isSurrogatePair';

import isInt from './lib/isInt';
import isFloat, { locales as isFloatLocales } from './lib/isFloat';
import isDecimal from './lib/isDecimal';
import isHexadecimal from './lib/isHexadecimal';
import isDivisibleBy from './lib/isDivisibleBy';

import isHexColor from './lib/isHexColor';

import isMD5 from './lib/isMD5';
import isHash from './lib/isHash';
import isJWT from './lib/isJWT';

import isJSON from './lib/isJSON';
import isEmpty from './lib/isEmpty';

import isLength from './lib/isLength';
import isByteLength from './lib/isByteLength';

import isUUID from './lib/isUUID';
import isMongoId from './lib/isMongoId';

import isAfter from './lib/isAfter';
import isBefore from './lib/isBefore';

import isIn from './lib/isIn';

import isCreditCard from './lib/isCreditCard';
import isIdentityCard from './lib/isIdentityCard';

import isMobilePhone, { locales as isMobilePhoneLocales } from './lib/isMobilePhone';

import isCurrency from './lib/isCurrency';

import isBase32 from './lib/isBase32';
import isBase64 from './lib/isBase64';
import isDataURI from './lib/isDataURI';
import isMagnetURI from './lib/isMagnetURI';

import isMimeType from './lib/isMimeType';

import isLatLong from './lib/isLatLong';
import isPostalCode, { locales as isPostalCodeLocales } from './lib/isPostalCode';

import ltrim from './lib/ltrim';
import rtrim from './lib/rtrim';
import trim from './lib/trim';
import escape from './lib/escape';
import unescape from './lib/unescape';
import stripLow from './lib/stripLow';
import whitelist from './lib/whitelist';
import blacklist from './lib/blacklist';
import isWhitelisted from './lib/isWhitelisted';

import normalizeEmail from './lib/normalizeEmail';

// ////////////////////////////////////////////////////////////////////////
// ADD
// ////////////////////////////////////////////////////////////////////////

// base
import kindOf from './lib/kindOf';
import hasOwnProperty from './lib/hasOwnProperty';
import objectToString from './lib/objectToString';

// validate
import isPhoneNum from './lib/isPhoneNum';
import isIdCard from './lib/isIdCard';

import isPrimitive from './lib/isPrimitive';

import isSameDay from './lib/isSameDay';
import isLeapYear from './lib/isLeapYear';

import isIOS from './lib/isIOS';
import isAndroid from './lib/isAndroid';
import isMobile from './lib/isMobile';
import isWin from './lib/isWin';
import isLinux from './lib/isLinux';
import isMac from './lib/isMac';
import isWeiXin from './lib/isWeiXin';

// platform
import getOS from './lib/getOS';
import getPlatform from './lib/getPlatform';
import getExplore from './lib/getExplore';

// date
import formatDate from './lib/formatDate';
import formatPassTime from './lib/formatPassTime';
import formatRemainTime from './lib/formatRemainTime';
import getDayOfWeek from './lib/getDayOfWeek';
import getWeek from './lib/getWeek';

// number
import formatNum from './lib/formatNum';
import digitUppercase from './lib/digitUppercase';

// dom
import getWindowSize from './lib/getWindowSize';
import getScrollTop from './lib/getScrollTop';
import setScrollTop from './lib/setScrollTop';
import scrollTo from './lib/scrollTo';
import offset from './lib/offset';

// url
import parseUrl from './lib/parseUrl';
import parseQueryString from './lib/parseQueryString';
import toQueryString from './lib/toQueryString';
import getQueryString from './lib/getQueryString';

// localStorage
import getLocalItem from './lib/getLocalItem';
import setLocalItem from './lib/setLocalItem';
import removeLocalItem from './lib/removeLocalItem';
// sessionStorage
import getSessionItem from './lib/getSessionItem';
import setSessionItem from './lib/setSessionItem';
import removeSessionItem from './lib/removeSessionItem';
// cookie
import getCookieItem from './lib/getCookieItem';
import setCookieItem from './lib/setCookieItem';
import removeCookieItem from './lib/removeCookieItem';

// tools
import clamp from './lib/clamp';
import convertRangeValue from './lib/convertRangeValue';
import arrayToHash from './lib/arrayToHash';
import shallowCopy from './lib/shallowCopy';
import deepClone from './lib/deepClone';
import deepEquals from './lib/deepEquals';
import debounce from './lib/debounce';
import throttle from './lib/throttle';
import pad from './lib/pad';
import checkPasswordLevel from './lib/checkPasswordLevel';
import inherits from './lib/inherits';
import md5 from './lib/md5';
import delay from './lib/delay';
import getKeyName from './lib/getKeyName';

import randomColor from './lib/randomColor';
import randomNum from './lib/randomNum';

import dataURLtoBlob from './lib/dataURLtoBlob';
import blobToDataURL from './lib/blobToDataURL';

import loadUI from './lib/loadUI';
import loadEruda from './lib/loadEruda';
import triggerEruda from './lib/triggerEruda';
import findScript from './lib/findScript';

import times from './lib/times';
import repeat from './lib/repeat';

const version = '2.0.0';

const jeselvmo = {
  version,
  toDate,
  toFloat,
  toInt,
  toBoolean,
  equals,
  contains,
  matches,
  isEmail,
  isURL,
  isMACAddress,
  isIP,
  isIPRange,
  isFQDN,
  isBoolean,
  isNumeric,
  isPort,
  isLowercase,
  isUppercase,
  isAscii,
  isFullWidth,
  isHalfWidth,
  isVariableWidth,
  isMultibyte,
  isSurrogatePair,
  isInt,
  isFloat,
  isFloatLocales,
  isDecimal,
  isHexadecimal,
  isDivisibleBy,
  isHexColor,
  isMD5,
  isHash,
  isJWT,
  isJSON,
  isEmpty,
  isLength,
  isByteLength,
  isUUID,
  isMongoId,
  isAfter,
  isBefore,
  isIn,
  isCreditCard,
  isIdentityCard,
  isMobilePhone,
  isMobilePhoneLocales,
  isPostalCode,
  isPostalCodeLocales,
  isCurrency,
  isBase32,
  isBase64,
  isDataURI,
  isMagnetURI,
  isMimeType,
  isLatLong,
  ltrim,
  rtrim,
  trim,
  escape,
  unescape,
  stripLow,
  whitelist, // 保留白名单中的字符
  blacklist, // 删除黑名单中的字符
  isWhitelisted,
  normalizeEmail,
  toString,

  // base
  kindOf,
  hasOwnProperty,
  objectToString,

  // validate
  isPhoneNum,
  isIdCard,
  isSameDay,
  isLeapYear,

  isPrimitive,

  // date
  formatDate,
  formatPassTime,
  formatRemainTime,
  getDayOfWeek,
  getWeek,

  // number
  formatNum,
  digitUppercase,

  // system
  isIOS,
  isAndroid,
  isMobile,
  isWin,
  isLinux,
  isMac,
  isWeiXin,

  // platform
  getOS,
  getPlatform,
  getExplore,

  // web
  getWindowSize,
  getScrollTop,
  setScrollTop,
  scrollTo,
  offset,

  // url
  parseUrl,
  parseQueryString,
  toQueryString,
  getQueryString,

  // localStorage
  getLocalItem,
  setLocalItem,
  removeLocalItem,
  // sessionStorage
  getSessionItem,
  setSessionItem,
  removeSessionItem,
  // cookie
  getCookieItem,
  setCookieItem,
  removeCookieItem,

  // others
  loadUI,
  loadEruda,
  triggerEruda,
  findScript,
  md5,
  delay,
  getKeyName,
  randomColor,
  randomNum,

  dataURLtoBlob,
  blobToDataURL,

  clamp,
  convertRangeValue,
  arrayToHash,
  shallowCopy,
  deepClone,
  deepEquals,
  debounce,
  throttle,
  pad,
  checkPasswordLevel,
  inherits,

  times,
  repeat
};

export default jeselvmo;
