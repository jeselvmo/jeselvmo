'use strict';

exports.__esModule = true;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* eslint-disable no-undef */
/**
 * network request
 */
var Request = function () {
    function Request() {
        _classCallCheck(this, Request);

        this._params = {};
    }

    _createClass(Request, [{
        key: 'addParam',
        value: function addParam(name, value) {
            this._params[name] = value;
        }
    }, {
        key: 'get',
        value: function get(url, params) {

            params = Object.assign(params || {}, this._params);

            console.log('==============================================');
            console.log('Get:' + url);
            console.log('Params:', params);

            return new Promise(function (resolve, reject) {
                $.ajax({
                    type: 'GET',
                    url: url,
                    data: params,
                    cache: false,
                    dataType: 'json',
                    success: function success(result) {
                        console.log('Result:', result);
                        resolve(result);
                    },
                    error: function error(XMLHttpRequest, textStatus, errorThrown) {
                        console.log('Error:', XMLHttpRequest, textStatus, errorThrown);
                        reject(XMLHttpRequest);
                    }
                });
            });
        }
    }, {
        key: 'post',
        value: function post(url, params) {

            params = Object.assign(params || {}, this._params);

            console.log('==============================================');
            console.log('Post:', url);
            console.log('Data:', params);

            return new Promise(function (resolve, reject) {
                $.ajax({
                    type: 'POST',
                    url: url,
                    data: params,
                    cache: false,
                    dataType: 'json',
                    success: function success(result) {
                        console.log('Result:', result);
                        resolve(result);
                    },
                    error: function error(XMLHttpRequest, textStatus, errorThrown) {
                        console.log('Error:', XMLHttpRequest, textStatus, errorThrown);
                        reject(XMLHttpRequest);
                    }
                });
            });
        }
    }]);

    return Request;
}();

var request = new Request();
exports.default = request;