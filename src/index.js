import typeOf from './lib/typeOf';
// validate
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
import isHex from './lib/isHex';
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
import isCardID from './lib/isCardID';
import isDate from './lib/isDate';
import isFalse from './lib/isFalse';
import isTrue from './lib/isTrue';
import isEmpty from './lib/isEmpty';

// device
import isIOS from './lib/isIOS';
import isAndroid from './lib/isAndroid';
import isHarmonyOS from './lib/isHarmonyOS';
import isMobile from './lib/isMobile';
import isWin from './lib/isWin';
import isLinux from './lib/isLinux';
import isMac from './lib/isMac';
import isWeiXin from './lib/isWeiXin';
import parseUA from './lib/parseUA';
import getOS from './lib/getOS';
import getBrowser from './lib/getBrowser';
import getDevice from './lib/getDevice';
import getEngine from './lib/getEngine';
import isIE from './lib/isIE';
import isChrome from './lib/isChrome';

// boolean
import toBoolean from './lib/toBoolean';

// html
import encodeHtml from './lib/encodeHtml';
import decodeHtml from './lib/decodeHtml';
import htmlEncode from './lib/htmlEncode';
import htmlDecode from './lib/htmlDecode';

// base64
import stringToBase64 from './lib/stringToBase64';
import base64ToString from './lib/base64ToString';

// string
import format from './lib/format';
import findText from './lib/findText';
import strLength from './lib/strLength';

// date
import formatDate from './lib/formatDate';
import formatPassTime from './lib/formatPassTime';
import formatRemainTime from './lib/formatRemainTime';
import formatDuration from './lib/formatDuration';
import isSameDay from './lib/isSameDay';
import isLeapYear from './lib/isLeapYear';

// number
import formatNum from './lib/formatNum';
import digitUppercase from './lib/digitUppercase';

// dom
import getWindowSize from './lib/getWindowSize';

// url
import toQueryString from './lib/toQueryString';
import getQueryString from './lib/getQueryString';

// local
import getLocal from './lib/getLocal';
import setLocal from './lib/setLocal';
import removeLocal from './lib/removeLocal';

// session
import getSession from './lib/getSession';
import setSession from './lib/setSession';
import removeSession from './lib/removeSession';

// cookie
import getCookie from './lib/getCookie';
import setCookie from './lib/setCookie';
import removeCookie from './lib/removeCookie';

// utils
import clamp from './lib/clamp';
import convertRangeValue from './lib/convertRangeValue';
import deepClone from './lib/deepClone';
import deepEquals from './lib/deepEquals';
import checkPasswordLevel from './lib/checkPasswordLevel';
import inherits from './lib/inherits';
import delay from './lib/delay';
import getKeyName from './lib/getKeyName';
import debounce from './lib/debounce';
import throttle from './lib/throttle';

import randomColor from './lib/randomColor';
import randomNum from './lib/randomNum';

import defineEnum from './lib/defineEnum';

import dataURLToBlob from './lib/dataURLToBlob';
import blobToDataURL from './lib/blobToDataURL';
import getDataURL from './lib/getDataURL';
import readFile from './lib/readFile';
import loadjs from './lib/loadjs';

import loadEruda from './lib/loadEruda';
import initEruda from './lib/initEruda';

import download from './lib/download';
import downloadBlob from './lib/downloadBlob';
import downloadData from './lib/downloadData';
import downloadDataURL from './lib/downloadDataURL';

import guid from './lib/guid';
import uuid from './lib/uuid';

const version = '2.0.6';

const jeselvmo = {
  version,
  typeOf,
  // validate
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
  isHex,
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
  isCardID,
  isDate,
  isFalse,
  isTrue,
  isEmpty,

  // device
  isIOS,
  isAndroid,
  isHarmonyOS,
  isMobile,
  isWin,
  isLinux,
  isMac,
  isWeiXin,
  parseUA,
  getBrowser,
  getOS,
  getDevice,
  getEngine,
  isIE,
  isChrome,

  toBoolean,

  // html
  encodeHtml,
  decodeHtml,
  htmlEncode,
  htmlDecode,

  // base64
  stringToBase64,
  base64ToString,

  // string
  format,
  findText,
  strLength,

  // date
  formatDate,
  formatPassTime,
  formatRemainTime,
  formatDuration,
  isSameDay,
  isLeapYear,

  // number
  formatNum,
  digitUppercase,

  // dom
  getWindowSize,

  // url
  toQueryString,
  getQueryString,

  // local
  getLocal,
  setLocal,
  removeLocal,

  // session
  getSession,
  setSession,
  removeSession,

  // cookie
  getCookie,
  setCookie,
  removeCookie,

  // utils
  clamp,
  convertRangeValue,
  deepClone,
  deepEquals,
  checkPasswordLevel,
  inherits,
  delay,
  getKeyName,
  debounce,
  throttle,

  randomColor,
  randomNum,

  defineEnum,

  // file
  dataURLToBlob,
  blobToDataURL,
  getDataURL,
  readFile,

  loadjs,

  // eruda
  loadEruda,
  initEruda,

  // download
  download,
  downloadBlob,
  downloadData,
  downloadDataURL,

  guid,
  uuid,
};

export default jeselvmo;
