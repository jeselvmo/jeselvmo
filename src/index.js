import validator from './lib/validator';
import sessionStore from "./lib/sessionStore";
import localStore from "./lib/localStore";
import regexp from "./lib/regexp";
import platform from "./lib/platform";
import request from "./lib/request";
import utils from './lib/utils';
import dateUtils from "./lib/dateUtils";
import urlUtils from "./lib/urlUtils";

const jeselvmo = {
	validator,
	platform,
	localStore,
	sessionStore,
	request,
	regexp,
	utils,
	dateUtils,
	urlUtils,
};


export default jeselvmo;
