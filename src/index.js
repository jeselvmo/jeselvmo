import typeOf from './lib/typeOf';
import isType from './lib/isType';

import isPrimitive from './lib/isPrimitive';
import isEmail from './lib/isEmail';
import isPhoneNum from './lib/isPhoneNum';
import isURL from './lib/isURL';
import isIP from './lib/isIP';
import isBoolean from './lib/isBoolean';
import isNumeric from './lib/isNumeric';
import isPort from './lib/isPort';
import isInt from './lib/isInt';
import isHexadecimal from './lib/isHexadecimal';
import isHexColor from './lib/isHexColor';
import isMD5 from './lib/isMD5';
import isJWT from './lib/isJWT';
import isJSON from './lib/isJSON';
import isLength from './lib/isLength';
import isUUID from './lib/isUUID';
import isIn from './lib/isIn';
import isBase64 from './lib/isBase64';
import isMimeType from './lib/isMimeType';
import isLatLong from './lib/isLatLong';

// userAgent
import isIOS from './lib/isIOS';
import isAndroid from './lib/isAndroid';
import isMobile from './lib/isMobile';
import isWin from './lib/isWin';
import isLinux from './lib/isLinux';
import isMac from './lib/isMac';
import isWeiXin from './lib/isWeiXin';
import isIE from './lib/isIE';
import parseUA from './lib/parseUA';
import getOS from './lib/getOS';
import getBrowser from './lib/getBrowser';
import getDevice from './lib/getDevice';
import getEngine from './lib/getEngine';

// boolean
import toBoolean from './lib/toBoolean';

// trim
import ltrim from './lib/ltrim';
import rtrim from './lib/rtrim';
import trim from './lib/trim';

// html
import encodeHtml from './lib/encodeHtml';
import decodeHtml from './lib/decodeHtml';
import htmlEncode from './lib/htmlEncode';
import htmlDecode from './lib/htmlDecode';

// date
import formatDate from './lib/formatDate';
import formatPassTime from './lib/formatPassTime';
import formatRemainTime from './lib/formatRemainTime';
import isSameDay from './lib/isSameDay';
import isLeapYear from './lib/isLeapYear';

// number
import formatNum from './lib/formatNum';
import digitUppercase from './lib/digitUppercase';

// dom
import getWindowSize from './lib/getWindowSize';

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
import shallowCopy from './lib/shallowCopy';
import deepClone from './lib/deepClone';
import deepEquals from './lib/deepEquals';
import checkPasswordLevel from './lib/checkPasswordLevel';
import inherits from './lib/inherits';
import delay from './lib/delay';
import getKeyName from './lib/getKeyName';

import randomColor from './lib/randomColor';
import randomNum from './lib/randomNum';

import dataURLToBlob from './lib/dataURLToBlob';
import blobToDataURL from './lib/blobToDataURL';
import readFile from './lib/readFile';

import loadUI from './lib/loadUI';
import loadEruda from './lib/loadEruda';
import initEruda from './lib/initEruda';

import download from './lib/download';
import downloadBlob from './lib/downloadBlob';

const version = '2.0.3';

const jeselvmo = {
  version,

  typeOf,
  isType,

  isPrimitive,
  isEmail,
  isPhoneNum,
  isURL,
  isIP,
  isBoolean,
  isNumeric,
  isPort,
  isInt,
  isHexadecimal,
  isHexColor,
  isMD5,
  isJWT,
  isJSON,
  isLength,
  isUUID,
  isIn,
  isBase64,
  isMimeType,
  isLatLong,

  isIOS,
  isAndroid,
  isMobile,
  isWin,
  isLinux,
  isMac,
  isWeiXin,
  isIE,
  parseUA,
  getOS,
  getBrowser,
  getDevice,
  getEngine,

  toBoolean,

  ltrim,
  rtrim,
  trim,

  encodeHtml,
  decodeHtml,
  htmlEncode,
  htmlDecode,

  formatDate,
  formatPassTime,
  formatRemainTime,
  isSameDay,
  isLeapYear,

  formatNum,
  digitUppercase,

  getWindowSize,

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

  // tools
  clamp,
  convertRangeValue,
  shallowCopy,
  deepClone,
  deepEquals,
  checkPasswordLevel,
  inherits,
  delay,
  getKeyName,
  randomColor,
  randomNum,

  dataURLToBlob,
  blobToDataURL,
  readFile,

  loadUI,
  loadEruda,
  initEruda,

  download,
  downloadBlob,
};

export default jeselvmo;
