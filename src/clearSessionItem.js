import clearStorageItem from './clearStorageItem';

function clearSessionItem() {
  clearStorageItem(window.sessionStorage);
}

export default clearSessionItem;
