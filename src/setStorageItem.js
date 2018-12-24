import isJSON from './isJson';
import stringify from './stringify';

function setStorageItem(storage, key, val) {
  if (key && !isJSON(key)) {
    storage.setItem(key, stringify(val));
  } else if (key && isJSON(key) && !val) {
    for (let k in key) setStorageItem(storage, k, key[k]);
  }
}

export default setStorageItem;
