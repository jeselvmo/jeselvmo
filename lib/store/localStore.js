'use strict';

exports.__esModule = true;

var _Store = require('./Store');

var _Store2 = _interopRequireDefault(_Store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var localStore = new _Store2.default(window.localStorage); /**
                                                            * localStore
                                                            */
exports.default = localStore;