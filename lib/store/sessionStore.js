'use strict';

exports.__esModule = true;

var _Store = require('./Store');

var _Store2 = _interopRequireDefault(_Store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sessionStore = new _Store2.default(window.sessionStorage); /**
                                                                * sessionStore
                                                                */
exports.default = sessionStore;