const request = {
    get(url, params, config) {
        return window.axios.get(url, Object.assign({}, config, {params}))
    },
    post(url, data, config) {
        return window.axios.post(url, data, config)
    }
};

export default request;
