import setStorageItem from "./setStorageItem";

function setLocalItem(key, val) {
    setStorageItem(window.localStorage, key, val);
}

export default setLocalItem;
