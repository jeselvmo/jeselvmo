import Cookie from './util/Cookie';

function getCookieItem(name) {
  return Cookie.get(name);
}

export default getCookieItem;
