import hasStorageItem from "./hasStorageItem";

function hasLocalItem(key) {
    return hasStorageItem(window.localStorage, key);
}

export default hasLocalItem;
