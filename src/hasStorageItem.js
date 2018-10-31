import getStorageItem from "./getStorageItem";

function hasStorageItem(storage, key) {
    return {}.hasOwnProperty.call(getStorageItem(storage), key);
}

export default hasStorageItem;
