import isJSON from '../isJSON';

function setStorageItem(storage, key, val) {
  if (key && !isJSON(key)) {
    let value = JSON.stringify(val);
    if (typeof value === 'undefined') {
      localStorage.removeItem(key);
    } else {
      storage.setItem(key, value);
    }
  } else if (key && isJSON(key) && !val) {
    for (let k in key) {
      setStorageItem(storage, k, key[k]);
    }
  }
}

export default setStorageItem;
