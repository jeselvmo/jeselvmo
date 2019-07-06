import Cookie from './util/Cookie';

function removeCookieItem(name, opts) {
  Cookie.remove(name, opts);
}

export default removeCookieItem;
