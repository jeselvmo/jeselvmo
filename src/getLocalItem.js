import getStorageItem from './getStorageItem';

function getLocalItem(key) {
  return getStorageItem(window.localStorage, key);
}

export default getLocalItem;
