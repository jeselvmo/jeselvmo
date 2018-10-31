import removeStorageItem from "./removeStorageItem";

function removeLocalItem(key) {
    removeStorageItem(window.localStorage, key);
}

export default removeLocalItem;
