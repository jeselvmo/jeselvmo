import removeStorageItem from './removeStorageItem';

function removeSessionItem(key) {
  removeStorageItem(window.sessionStorage, key);
}

export default removeSessionItem;
