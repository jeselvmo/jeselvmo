import Store from './Store';

class LocalStore extends Store {
    constructor() {
        super(window.localStorage);
    }
}

export default LocalStore;
