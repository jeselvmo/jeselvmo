import Cookie from './util/Cookie';

function setCookieItem(name, value, opts) {
  Cookie.set(name, value, opts);
}

export default setCookieItem;
