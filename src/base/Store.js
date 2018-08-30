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
    return typeof obj === "object" && Object.prototype.toString.call(obj).toLowerCase() === "[object object]" && !obj.length;
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

function dealIncognito(storage) {
    let _KEY = "_Is_Incognit", _VALUE = "yes";
    try {
        storage.setItem(_KEY, _VALUE);
    } catch (e) {
        if (e.name === "QuotaExceededError") {
            let _nothing = function () {
            };
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

class Store {

    constructor(provider) {
        if (!provider) return;

        this.storage = provider;
        this.store = null;
        this._api = null;
        this.even_storage = function () {
        };

        // deal QuotaExceededError if user use incognito mode in browser
        this.storage = dealIncognito(this.storage);
    }

    set(key, val) {
        this.even_storage("set", key, val);
        if (key && !isJSON(key)) {
            this.storage.setItem(key, stringify(val));
        } else if (key && isJSON(key) && !val) {
            for (let a in key) this.set(a, key[a]);
        }
        return this;
    }

    get(key) {
        if (!key) {
            let ret = {};
            this.forEach(function (key, val) {
                ret[key] = val;
            });
            return ret;
        }
        if (key.charAt(0) === "?") {
            return this.has(key.substr(1));
        }
        return deserialize(this.storage.getItem(key));
    }

    clear() {
        this.forEach(function (key, val) {
            this.even_storage("clear", key, val);
        });
        this.storage.clear();
        return this;
    }

    remove(key) {
        let val = this.get(key);
        this.storage.removeItem(key);
        this.even_storage("remove", key, val);
        return val;
    }

    has(key) {
        return {}.hasOwnProperty.call(this.get(), key);
    }

    keys() {
        let d = [];
        this.forEach(function (k) {
            d.push(k);
        });
        return d;
    }

    size() {
        return this.keys().length;
    }

    forEach(callback) {
        for (let i = 0; i < this.storage.length; i++) {
            let key = this.storage.key(i);
            if (callback(key, this.get(key)) === false) break;
        }
        return this;
    }

    search(str) {
        let arr = this.keys(), dt = {};
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].indexOf(str) > -1) dt[arr[i]] = this.get(arr[i]);
        }
        return dt;
    }

    onStorage(cb) {
        if (cb && isFunction(cb)) this.even_storage = cb;
        return this;
    }
}

export default Store
