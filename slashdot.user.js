// ==UserScript==
// @name         slashdot hacks
// @namespace    http://bd808.com/userscripts
// @description  Make slashdot look and work like I want it to
// @match        http://slashdot.org/*
// @version      0.1
// @author       Bryan Davis
// @license      MiT License; http://opensource.org/licenses/MIT
// @downloadURL  https://bd808.github.io/userscripts/slashdot.user.js
// @updateURL    https://bd808.github.io/userscripts/slashdot.user.js
// @grant        GM_addStyle
// @grant        GM_getResourceText
// @resource     slashdotcss http://bd808.com/userscripts/slashdot.user.css
// ==/UserScript==
GM_addStyle(GM_getResourceText('slashdotcss'));
