'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Store = require('./Store');

var _Store2 = _interopRequireDefault(_Store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SessionStore = new _Store2.default(window.sessionStorage); /**
                                                                * sessionStore
                                                                */
exports.default = SessionStore;
module.exports = exports['default'];