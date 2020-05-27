// ==UserScript==
// @name         etherpad personal settings
// @namespace    http://bd808.com/userscripts/
// @description  Don't use this unless you are bd808!
// @match        https://etherpad.wikimedia.org/p/*
// @version      1.0
// @author       Bryan Davis
// @license      MIT License; http://opensource.org/licenses/MIT
// @downloadURL  https://bd808.com/userscripts/etherpad.user.js
// @updateURL    https://bd808.com/userscripts/etherpad.user.js
// @run-at       document-idle
// ==/UserScript==

/* Try to set pad username and color */
(function() {
    "use strict";
    var interval = window.setInterval(
        function() {
            if (window.hasOwnProperty("pad")) {
                pad.notifyChangeColor("#fdf6e3");
                pad.notifyChangeName("bd808");
                window.clearInterval(interval);
            }
        },
        500
    );
})();
