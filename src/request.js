const request = {
  get(url, params, config) {
    return axios.get(url, Object.assign({}, config, { params }));
  },

  post(url, data, config) {
    return axios.post(url, data, config);
  }
};

export default request;
