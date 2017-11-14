'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Store = require('./Store');

var _Store2 = _interopRequireDefault(_Store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var localStore = new _Store2.default(window.sessionStore); /**
                                                            * localStore
                                                            */
exports.default = localStore;
module.exports = exports['default'];