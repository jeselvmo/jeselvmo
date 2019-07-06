import getStorageItem from './getStorageItem';
import setStorageItem from './setStorageItem';

function storage(store) {
  return (...args) => {
    let len = args.length;
    if (len === 0) {
      return getStorageItem(store); // 获取全部
    } else if (len === 1) {
      return getStorageItem(store, args[0]); // 获取
    }
    if (args[1] == null) {
      store.removeItem(args[0]); // 移除
    } else {
      setStorageItem(store, args[0], args[1]); // 设置
    }
    return undefined;
  };
}

export default storage;
