import getStorageItem from './getStorageItem';

function getSessionItem(key) {
  return getStorageItem(window.sessionStorage, key);
}

export default getSessionItem;
