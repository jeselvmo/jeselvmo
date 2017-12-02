"use strict";

exports.__esModule = true;

var _objectAssign = require("../base/object-assign");

var _objectAssign2 = _interopRequireDefault(_objectAssign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var utils = {

    /**
     * 获得window大小
     */
    getWindowSize: function getWindowSize() {
        var winWidth = 0,
            winHeight = 0;
        // 获取窗口宽度
        if (window.innerWidth) winWidth = window.innerWidth;else if (document.body && document.body.clientWidth) winWidth = document.body.clientWidth;
        // 获取窗口高度
        if (window.innerHeight) winHeight = window.innerHeight;else if (document.body && document.body.clientHeight) winHeight = document.body.clientHeight;
        // 通过深入 Document 内部对 body 进行检测，获取窗口大小
        if (document.documentElement && document.documentElement.clientHeight && document.documentElement.clientWidth) {
            winHeight = document.documentElement.clientHeight;
            winWidth = document.documentElement.clientWidth;
        }

        return {
            width: winWidth,
            height: winHeight
        };
    },


    assign: _objectAssign2.default

}; /* eslint-disable no-undef,valid-jsdoc,spaced-comment,quote-props,comma-dangle,curly,prefer-template,eqeqeq,max-len */
exports.default = utils;