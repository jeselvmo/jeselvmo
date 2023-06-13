// Lang
import typeOf from './typeOf'; // 获取类型
import isType from './isType'; // 判断类型
import isPrimitive from './isPrimitive'; // 是原始类型
import isEmpty from './isEmpty'; // 是空的

// String
import toString from './toString'; // 转字符串
import words from './words'; // 分割单词
import capitalize from './capitalize'; // 首字母大写，其它小写
import lowerFirst from './lowerFirst'; // 首字母转小写
import upperFirst from './upperFirst'; // 首字母转大写
import camelCase from './camelCase'; // camelCase
import pascalCase from './pascalCase'; // PascalCase
import constantCase from './constantCase'; // CONSTANT_CASE
import dotCase from './dotCase'; // dot.case
import kebabCase from './kebabCase'; // kebab-case
import snakeCase from './snakeCase'; // snake_case
import startCase from './startCase'; // Start Case
import pathCase from './pathCase'; // path/case
import titleCase from './titleCase'; // Title Case
import sentenceCase from './sentenceCase'; // Sentence case
import lowerCase from './lowerCase'; // lower case
import upperCase from './upperCase'; // UPPER CASE

// Validate
import isEmail from './isEmail'; // 是Email
import isPhoneNum from './isPhoneNum'; // 是手机号
import isURL from './isURL'; // 是URL
import isIP from './isIP'; // 是IP
import isPort from './isPort'; // 是端口
import isHex from './isHex'; // 是十六进制
import isHexColor from './isHexColor'; // 是十六进制颜色
import isMD5 from './isMD5'; // 是MD5
import isJson from './isJson'; // 是JSON
import isUUID from './isUUID'; // 是UUID
import isBase64 from './isBase64'; // 是Base64
import isMimeType from './isMimeType'; // 是文件类型
import isLatLong from './isLatLong'; // 是经纬度
import isIDCard from './isIDCard'; // 是身份证号

// Date
import toDate from './toDate'; // 转日期
import formatDate from './formatDate'; // 格式化日期
import formatPassTime from './formatPassTime'; // 已过时间
import formatRemainTime from './formatRemainTime'; // 剩余时间
// import formatDuration from './formatDuration'; // 格式化时长
import isSameDay from './isSameDay'; // 是同一天
import isToday from './isToday'; // 是今天
import isLeapYear from './isLeapYear'; // 是闰年

// Number
import toNumber from './toNumber'; // 转Number
import toInteger from './toInteger'; // 转Int
import formatNumber from './formatNumber'; // 格式化数字
import digitUpperCase from './digitUpperCase'; // 数字大写
import convertRangeValue from './convertRangeValue'; // 进度转换
import clamp from './clamp'; // 加紧
import round from './round'; // 保留精度，四舍五入
import ceil from './ceil'; // 保留精度，向上
import floor from './floor'; // 保留精度，向上

// Boolean
import toBoolean from './toBoolean'; // 转布尔

// Array
import toArray from './toArray'; // 转数组

// Object
import toPlainObject from './toPlainObject'; // 转普通对象
import isPlainObject from './isPlainObject'; // 是普通对象

// Event
import getEventEmitter from './getEventEmitter'; // 获取EventEmitter
import eventNames from './eventNames'; // 获取事件名称
import listeners from './listeners'; // 获取事件侦听器
import listenerCount from './listenerCount'; // 获取事件侦听器数量
import addListener from './addListener'; // 添加事件侦听器
import removeListener from './removeListener'; // 移除事件侦听器
import removeAllListeners from './removeAllListeners'; // 移除所有事件侦听器
import emit from './emit'; // 事件发送
import on from './on'; // 同addListener
import off from './off'; // 同removeListener

// UserAgent
import parseUA from './parseUA';
import getOS from './getOS';
import getBrowser from './getBrowser';
import getDevice from './getDevice';
import getEngine from './getEngine';
import isIOS from './isIOS';
import isAndroid from './isAndroid';
import isHarmonyOS from './isHarmonyOS';
import isMobile from './isMobile';
import isWeiXin from './isWeiXin';
import isWindows from './isWindows';
import isLinux from './isLinux';
import isMac from './isMac';
import isIE from './isIE';
import isChrome from './isChrome';

// Web
import getQueryString from './getQueryString';
import toQueryString from './toQueryString';
import getLocal from './getLocal';
import setLocal from './setLocal';
import removeLocal from './removeLocal';
import getSession from './getSession';
import setSession from './setSession';
import removeSession from './removeSession';
import getCookie from './getCookie';
import setCookie from './setCookie';
import removeCookie from './removeCookie';
import getWindowSize from './getWindowSize';
import loadjs from './loadjs'; // 加载js/css
import loadEruda from './loadEruda'; // 加载eruda
import initEruda from './initEruda'; // 初始化eruda
import download from './download'; // 下载文件
import downloadBlob from './downloadBlob'; // 下载blob
import downloadData from './downloadData'; // 下载数据
import downloadDataURL from './downloadDataURL'; // 下载DataURL

// Utils
import checkPasswordLevel from './checkPasswordLevel'; // 检查密码强度
import defineEnum from './defineEnum'; // 定义枚举
import dataURLToBlob from './dataURLToBlob'; // DataURL转blob
import blobToDataURL from './blobToDataURL'; // blob转DataURL
import getDataURL from './getDataURL'; //获取DataURL
import readBlob from './readBlob'; // 读取文件
import sleep from './sleep'; // 休息一下
import findText from './findText'; // 文本查找
import strLength from './strLength'; // 字符串长度
import encodeHtml from './encodeHtml'; // HTML转义
import decodeHtml from './decodeHtml'; // HTML反转义
import stringToBase64 from './stringToBase64'; // 字符串转Base64
import base64ToString from './base64ToString'; // Base64转字符串
import retry from './retry'; // 失败重试

const VERSION = '3.0.0-beta.4';

const jeselvmo = {
  VERSION,
  addListener,
  base64ToString,
  blobToDataURL,
  camelCase,
  capitalize,
  ceil,
  checkPasswordLevel,
  clamp,
  constantCase,
  convertRangeValue,
  dataURLToBlob,
  decodeHtml,
  defineEnum,
  digitUpperCase,
  dotCase,
  download,
  downloadBlob,
  downloadData,
  downloadDataURL,
  emit,
  encodeHtml,
  eventNames,
  findText,
  floor,
  formatDate,
  formatNumber,
  formatPassTime,
  formatRemainTime,
  getBrowser,
  getCookie,
  getDataURL,
  getDevice,
  getEngine,
  getEventEmitter,
  getLocal,
  getOS,
  getQueryString,
  getSession,
  getWindowSize,
  initEruda,
  isAndroid,
  isBase64,
  isChrome,
  isEmail,
  isEmpty,
  isHarmonyOS,
  isHex,
  isHexColor,
  isIDCard,
  isIE,
  isIOS,
  isIP,
  isJson,
  isLatLong,
  isLeapYear,
  isLinux,
  isMac,
  isMD5,
  isMimeType,
  isMobile,
  isPhoneNum,
  isPlainObject,
  isPort,
  isPrimitive,
  isSameDay,
  isToday,
  isType,
  isURL,
  isUUID,
  isWeiXin,
  isWindows,
  kebabCase,
  listenerCount,
  listeners,
  loadEruda,
  loadjs,
  lowerCase,
  lowerFirst,
  off,
  on,
  parseUA,
  pascalCase,
  pathCase,
  readBlob,
  removeAllListeners,
  removeCookie,
  removeListener,
  removeLocal,
  removeSession,
  round,
  sentenceCase,
  setCookie,
  setLocal,
  setSession,
  sleep,
  snakeCase,
  startCase,
  stringToBase64,
  strLength,
  titleCase,
  toArray,
  toBoolean,
  toDate,
  toInteger,
  toNumber,
  toPlainObject,
  toQueryString,
  toString,
  typeOf,
  upperCase,
  upperFirst,
  words,
  retry,
};

export default jeselvmo;
