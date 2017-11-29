'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Store = require('./Store');

var _Store2 = _interopRequireDefault(_Store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LocalStore = new _Store2.default(window.localStorage); /**
                                                            * localStore
                                                            */
exports.default = LocalStore;
module.exports = exports['default'];