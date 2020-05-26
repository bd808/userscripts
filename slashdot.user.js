// ==UserScript==
// @name         slashdot hacks
// @namespace    http://bd808.com/userscripts
// @description  Make slashdot look and work like I want it to
// @match        http://slashdot.org/*
// @version      0.4.1
// @author       Bryan Davis
// @license      MiT License; http://opensource.org/licenses/MIT
// @downloadURL  https://bd808.com/userscripts/slashdot.user.js
// @updateURL    https://bd808.com/userscripts/slashdot.user.js
// @grant        GM_addStyle
// @grant        GM_getResourceText
// @grant        GM.addStyle
// @grant        GM.getResourceText
// @grant        GM.getResourceurl
// @require      https://bd808.com/gm4-polyfill/gm4-polyfill.js
// @resource     slashdotcss https://bd808.com/userscripts/slashdot.user.css
// ==/UserScript==
GM.getResourceText('slashdotcss').then(function(css){GM.addStyle(css);});
