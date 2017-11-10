/**
 * network request
 */

import axios from 'axios';
import $ from 'jquery';

const request = {

    get(url, params) {
        params = params || {};

        console.log('==============================================');
        console.log(`Get:${url}`);
        console.log('Params:', params);

        return new Promise(((resolve, reject) => {
            axios.get(url, {
                params,
            })
                .then((response) => {
                    console.log('Respons:', response);
                    console.log('Result:', response.data);
                    resolve(response.data);
                })
                .catch((error) => {
                    console.log('Error:', error);
                    reject(error);
                });
        }));
    },

    post(url, params) {
        params = params || {};

        console.log('==============================================');
        console.log('Post:', url);
        console.log('Data:', params);

        return new Promise((resolve, reject) => {
            axios.post(url, params)
                .then((response) => {
                    console.log('Respons:', response);
                    console.log('Result:', response.data);
                    resolve(response.data);
                })
                .catch((error) => {
                    console.log('Error:', error);
                    reject(error);
                });
        });
    },

    // 获取QueryString
    getQueryString(name) {
        if (name) {
            let reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`, 'i');
            let r = window.location.search.substr(1).match(reg);
            if (r !== null) {
                return unescape(r[2]);
            }
            return null;
        }
        let url = location.search; // 获取url中"?"符后的字串
        let params = {};
        if (url.indexOf('?') !== -1) {
            let str = url.substr(1);
            let strs = str.split('&');
            for (let i = 0; i < strs.length; i++) {
                params[strs[i].split('=')[0]] = decodeURIComponent(strs[i].split('=')[1]);
            }
        }
        return params;
    },

    // 对象转QueryString
    toQueryString(params) {
        let paramsArray = [];
        Object.keys(params).forEach((key) => {
            paramsArray.push(`${key}=${encodeURIComponent(params[key])}`);
        });
        return paramsArray.join('&');
    },

};

export default request;
