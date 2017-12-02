/**
 * localStore
 */
import Store from './Store';

var localStore = new Store(window.localStorage);
export default localStore;