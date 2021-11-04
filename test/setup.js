import { JSDOM } from 'jsdom';
import vm from 'vm';
import fs from 'fs';

const { window } = new JSDOM('<!doctype html><html><body></body></html>');

global.window = window;
global.document = window.document;
global.navigator = window.navigator;

let jeselvmo_js = fs.readFileSync(require.resolve('../jeselvmo.js')).toString();

let sandbox = vm.createContext(window);
vm.runInContext(jeselvmo_js, sandbox);
