import utils from './lib/utils';
import platform from './lib/platform';
import request from './lib/request';
import validator from './lib/validator';
import localStore from './lib/localStore';
import sessionStore from './lib/sessionStore';


const version = '1.0.0';

const Jesse = {
    version,
    utils,
    platform,
    request,
    validator,
    localStore,
    sessionStore,
};

export default Jesse;
