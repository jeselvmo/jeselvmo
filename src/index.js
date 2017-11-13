import validator from './lib/validator';
import utils from './lib/utils';
import sessionStore from "./lib/sessionStore";
import localStore from "./lib/localStore";
import regexp from "./lib/regexp";
import platform from "./lib/platform";
import dateutil from "./lib/dateutil";
import request from "./lib/request";
import browser from "./lib/browser";

const version = '0.0.4';

const jeselvmo = {
	version,
	validator,
	platform,
	localStore,
	sessionStore,
	request,
	dateutil,
	regexp,
	utils,
	browser,
};

export default jeselvmo;
