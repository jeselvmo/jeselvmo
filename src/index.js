import validator from './validator';
import utils from './utils';
import sessionStore from "./sessionStore";
import localStore from "./localStore";
import regexp from "./regexp";
import platform from "./platform";
import dateUtils from "./dateutil";
import request from "./request";
import URLUtils from "./URLUtils";

const jeselvmo = {
	validator,
	platform,
	localStore,
	sessionStore,
	request,
	dateUtils,
	regexp,
	utils,
	URLUtils,
};

export default jeselvmo;
