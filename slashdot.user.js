// ==UserScript==
// @name         slashdot hacks
// @namespace    http://bd808.com/userscripts
// @description  Make slashdot look and work like I want it to
// @match        http://slashdot.org/*
// @version      0.2
// @author       Bryan Davis
// @license      MiT License; http://opensource.org/licenses/MIT
// @downloadURL  https://bd808.github.io/userscripts/slashdot.user.js
// @updateURL    https://bd808.github.io/userscripts/slashdot.user.js
// @grant        GM_addStyle
// @grant        GM_getResourceText
// @grant        GM.addStyle
// @grant        GM.getResourceText
// @require      https://greasemonkey.github.io/gm4-polyfill/gm4-polyfill.js
// @resource     slashdotcss https://bd808.github.io/userscripts/slashdot.user.css
// ==/UserScript==
GM.addStyle(GM.getResourceText('slashdotcss'));
