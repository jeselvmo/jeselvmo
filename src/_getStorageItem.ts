function deserialize(value: any) {
  if (typeof value === 'string') {
    try {
      return JSON.parse(value);
    } catch (e) {
      return value;
    }
  }
  return undefined;
}

function getStorageItem(storage: Storage, key: string) {
  if (!key) {
    const ret: any = {};
    for (let i = 0; i < storage.length; i++) {
      const k: string = storage.key(i) || 'null';
      ret[k] = getStorageItem(storage, k);
    }
    return ret;
  }
  return deserialize(storage.getItem(key));
}

export default getStorageItem;
