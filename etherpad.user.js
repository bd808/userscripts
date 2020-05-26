// ==UserScript==
// @name         etherpad personal settings
// @namespace    http://bd808.com/userscripts/
// @description  Don't use this unless you are bd808!
// @match        https://etherpad.wikimedia.org/p/*
// @version      0.6.1
// @author       Bryan Davis
// @license      MIT License; http://opensource.org/licenses/MIT
// @downloadURL  https://bd808.com/userscripts/etherpad.user.js
// @updateURL    https://bd808.com/userscripts/etherpad.user.js
// @grant        GM_addStyle
// @grant        GM_getResourceText
// @grant        GM.addStyle
// @grant        GM.getResourceText
// @grant        GM.getResourceUrl
// @require      https://bd808.com/gm4-polyfill/gm4-polyfill.js
// @resource     etherpadcss https://bd808.com/userscripts/etherpad.user.css
// ==/UserScript==
GM.getResourceText('etherpadcss').then(function(css){GM.addStyle(css);});
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
