import Validator from './lib/Validator';
import SessionStore from "./lib/SessionStore";
import LocalStore from "./lib/LocalStore";
import Platform from "./lib/Platform";
import Request from "./lib/Request";
import Utils from './lib/Utils';
import DateUtils from "./lib/DateUtils";
import UrlUtils from "./lib/UrlUtils";
import Pinyin from "./lib/Pinyin";

const Jeselvmo = {
	Validator,
	Platform,
	LocalStore,
	SessionStore,
	Request,
	Utils,
	DateUtils,
	UrlUtils,
	Pinyin
};

if (window) {
	window.J = Jeselvmo;
}

export default Jeselvmo;
