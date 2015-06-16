// ==UserScript==
// @name         github hacks
// @namespace    http://bd808.com/userscripts/
// @description  Make github look and work like I want it to
// @match        https://github.com/*
// @version      0.1
// @author       Bryan Davis
// @license      MiT License; http://opensource.org/licenses/MIT
// @downloadURL  https://bd808.github.io/userscripts/github.user.js
// @updateURL    https://bd808.github.io/userscripts/github.user.js
// @grant        GM_addStyle
// @grant        GM_getResourceText
// @resource     usercss http://bd808.com/userscripts/github.user.css
// @resource     mdocss https://raw.githubusercontent.com/mdo/github-wide/master/github-wide.css
// ==/UserScript==
GM_addStyle(GM_getResourceText('mdocss'));
GM_addStyle(GM_getResourceText('usercss'));
