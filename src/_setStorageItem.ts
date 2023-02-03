function setStorageItem(storage: Storage, key: string, value: any): void {
  const value2 = JSON.stringify(value);
  if (typeof value2 === 'undefined') {
    storage.removeItem(key);
  } else {
    storage.setItem(key, value2);
  }
}

export default setStorageItem;
