function deserialize(value) {
  if (typeof value !== 'string') {
    return undefined;
  }
  try {
    return JSON.parse(value);
  } catch (e) {
    return value || undefined;
  }
}

function getStorageItem(storage, key) {
  if (!key) {
    let ret = {};
    for (let i = 0; i < storage.length; i++) {
      let k = storage.key(i);
      ret[k] = getStorageItem(storage, k);
    }
    return ret;
  }
  return deserialize(storage.getItem(key));
}

export default getStorageItem;
