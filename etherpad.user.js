// ==UserScript==
// @name         etherpad personal settings
// @namespace    http://bd808.com/userscripts/
// @description  Don't use this unless you are bd808!
// @match        http://etherpad.*/p/*
// @match        https://etherpad.*/p/*
// @version      0.3
// @author       Bryan Davis
// @license      MIT License; http://opensource.org/licenses/MIT
// @downloadURL  http://bd808.com/userscripts/etherpad.user.js
// @updateURL    http://bd808.com/userscripts/etherpad.user.js
// @grant none
// @run-at document-end
// ==/UserScript==
(function() {
    pad.notifyChangeColor('#fdf6e3');
    pad.notifyChangeName('bd808');
})();