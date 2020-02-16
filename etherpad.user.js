// ==UserScript==
// @name         etherpad personal settings
// @namespace    http://bd808.com/userscripts/
// @description  Don't use this unless you are bd808!
// @match        *://etherpad.wikimedia.org/p/*
// @version      0.5
// @author       Bryan Davis
// @license      MIT License; http://opensource.org/licenses/MIT
// @downloadURL  https://bd808.github.io/userscripts/etherpad.user.js
// @updateURL    https://bd808.github.io/userscripts/etherpad.user.js
// @grant none
// @run-at document-end
// ==/UserScript==
(function() {
    "use strict";
    var interval = window.setInterval(
        function() {
            if (window.hasOwnProperty("pad")) {
                pad.notifyChangeColor('#fdf6e3');
                pad.notifyChangeName('bd808');
                window.clearInterval(interval);
            }
        },
        500
    );
})();
