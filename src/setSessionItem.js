import setStorageItem from './setStorageItem';

function setSessionItem(key, val) {
  setStorageItem(window.sessionStorage, key, val);
}

export default setSessionItem;
