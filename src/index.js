import toDate from './lib/toDate';
import toBoolean from './lib/toBoolean';

import isEmail from './lib/isEmail';
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

import ltrim from './lib/ltrim';
import rtrim from './lib/rtrim';
import trim from './lib/trim';

import encodeHtml from './lib/encodeHtml';
import decodeHtml from './lib/decodeHtml';
import htmlEncode from './lib/htmlEncode';
import htmlDecode from './lib/htmlDecode';

import whitelist from './lib/whitelist';
import blacklist from './lib/blacklist';
import isWhitelisted from './lib/isWhitelisted';

// ////////////////////////////////////////////////////////////////////////
// ADD
// ////////////////////////////////////////////////////////////////////////

// 类型
import typeOf from './lib/typeOf';
import isType from './lib/isType';

// validate
import isPhoneNum from './lib/isPhoneNum';

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
import isIE from './lib/isIE';

// platform
import parseUA from './lib/parseUA';
import getOS from './lib/getOS';
import getBrowser from './lib/getBrowser';
import getDevice from './lib/getDevice';
import getEngine from './lib/getEngine';

// date
import formatDate from './lib/formatDate';
import parseDate from './lib/parseDate';
import formatPassTime from './lib/formatPassTime';
import formatRemainTime from './lib/formatRemainTime';
import getDayOfWeek from './lib/getDayOfWeek';
import getWeek from './lib/getWeek';

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

import dataURLToBlob from './lib/dataURLToBlob2';
import blobToDataURL from './lib/blobToDataURL';
import readFile from './lib/readFile';

import loadUI from './lib/loadUI';
import loadEruda from './lib/loadEruda';
import initEruda from './lib/initEruda';

import times from './lib/times';
import repeat from './lib/repeat';

import download from './lib/download';
import downloadBlob from './lib/downloadBlob';

const version = '2.0.2';

const jeselvmo = {
  version,
  toDate,
  toBoolean,
  isEmail,
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
  ltrim,
  rtrim,
  trim,

  encodeHtml,
  decodeHtml,
  htmlEncode,
  htmlDecode,

  whitelist,
  blacklist,
  isWhitelisted,
  toString,

  // 类型
  typeOf,
  isType,

  // validate
  isPhoneNum,
  isSameDay,
  isLeapYear,

  isPrimitive,

  // date
  formatDate,
  parseDate,
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
  isIE,

  // platform
  parseUA,
  getOS,
  getBrowser,
  getDevice,
  getEngine,

  // web
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

  // others
  loadUI,
  loadEruda,
  initEruda,
  delay,
  getKeyName,
  randomColor,
  randomNum,

  dataURLToBlob,
  blobToDataURL,
  readFile,

  clamp,
  convertRangeValue,
  shallowCopy,
  deepClone,
  deepEquals,
  checkPasswordLevel,
  inherits,

  times,
  repeat,

  download,
  downloadBlob
};

export default jeselvmo;
