/*!
 * storejs v1.0.16
 * Local storage localstorage package provides a simple API
 *
 * Copyright (c) 2017 kenny wang <wowohoo@qq.com>
 * https://github.com/jaywcjlove/store.js
 *
 * Licensed under the MIT license.
 */

import store from './store';

const localStore = store(window.localStorage);
export default localStore;
