import Store from './Store';

class SessionStore extends Store {
    constructor() {
        super(window.sessionStorage);
    }
}

export default SessionStore;
