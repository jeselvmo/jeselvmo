import hasStorageItem from './hasStorageItem';

function hasSessionItem(key) {
  return hasStorageItem(window.sessionStorage, key);
}

export default hasSessionItem;
