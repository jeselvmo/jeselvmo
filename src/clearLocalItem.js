import clearStorageItem from './clearStorageItem';

function clearLocalItem() {
  clearStorageItem(window.localStorage);
}

export default clearLocalItem;
