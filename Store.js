"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/* eslint-disable no-unused-vars,init-declarations,no-undefined,no-shadow,prefer-template,no-var,no-underscore-dangle,vars-on-top,no-proto,object-shorthand,prefer-arrow-callback,guard-for-in,max-len */

/*!
 * storejs v1.0.16
 * Local storage localstorage package provides a simple API
 *
 * Copyright (c) 2017 kenny wang <wowohoo@qq.com>
 * https://github.com/jaywcjlove/store.js
 *
 * Licensed under the MIT license.
 */

function isJSON(obj) {
	return (typeof obj === "undefined" ? "undefined" : _typeof(obj)) === "object" && Object.prototype.toString.call(obj).toLowerCase() === "[object object]" && !obj.length;
}

function stringify(val) {
	return val === undefined || typeof val === "function" ? val + "" : JSON.stringify(val);
}

function deserialize(value) {
	if (typeof value !== "string") {
		return undefined;
	}
	try {
		return JSON.parse(value);
	} catch (e) {
		return value || undefined;
	}
}

function isFunction(value) {
	return {}.toString.call(value) === "[object Function]";
}

function isArray(value) {
	return value instanceof Array;
}

function dealIncognito(storage) {
	var _KEY = "_Is_Incognit",
	    _VALUE = "yes";
	try {
		storage.setItem(_KEY, _VALUE);
	} catch (e) {
		if (e.name === "QuotaExceededError") {
			var _nothing = function _nothing() {};
			storage.__proto__ = {
				setItem: _nothing,
				getItem: _nothing,
				removeItem: _nothing,
				clear: _nothing
			};
		}
	} finally {
		if (storage.getItem(_KEY) === _VALUE) storage.removeItem(_KEY);
	}
	return storage;
}

function Store(provider) {
	if (!provider) return;

	this.storage = provider;
	this.store = null;
	this._api = null;
	this.even_storage = function () {};

	// deal QuotaExceededError if user use incognito mode in browser
	this.storage = dealIncognito(this.storage);
}

Store.prototype = {
	set: function set(key, val) {
		this.even_storage("set", key, val);
		if (key && !isJSON(key)) {
			this.storage.setItem(key, stringify(val));
		} else if (key && isJSON(key) && !val) {
			for (var a in key) {
				this.set(a, key[a]);
			}
		}
		return this;
	},
	get: function get(key) {
		if (!key) {
			var ret = {};
			this.forEach(function (key, val) {
				ret[key] = val;
			});
			return ret;
		}
		if (key.charAt(0) === "?") {
			return this.has(key.substr(1));
		}
		return deserialize(this.storage.getItem(key));
	},
	clear: function clear() {
		this.forEach(function (key, val) {
			this.even_storage("clear", key, val);
		});
		this.storage.clear();
		return this;
	},
	remove: function remove(key) {
		var val = this.get(key);
		this.storage.removeItem(key);
		this.even_storage("remove", key, val);
		return val;
	},
	has: function has(key) {
		return {}.hasOwnProperty.call(this.get(), key);
	},
	keys: function keys() {
		var d = [];
		this.forEach(function (k, list) {
			d.push(k);
		});
		return d;
	},
	size: function size() {
		return this.keys().length;
	},
	forEach: function forEach(callback) {
		for (var i = 0; i < this.storage.length; i++) {
			var key = this.storage.key(i);
			if (callback(key, this.get(key)) === false) break;
		}
		return this;
	},
	search: function search(str) {
		var arr = this.keys(),
		    dt = {};
		for (var i = 0; i < arr.length; i++) {
			if (arr[i].indexOf(str) > -1) dt[arr[i]] = this.get(arr[i]);
		}
		return dt;
	},
	onStorage: function onStorage(cb) {
		if (cb && isFunction(cb)) this.even_storage = cb;
		return this;
	}
};

exports.default = Store;
module.exports = exports["default"];