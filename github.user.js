// ==UserScript==
// @name         github hacks
// @namespace    http://bd808.com/userscripts/
// @description  Make github look and work like I want it to
// @match        https://github.com/*
// @version      0.2
// @author       Bryan Davis
// @license      MiT License; http://opensource.org/licenses/MIT
// @downloadURL  https://bd808.github.io/userscripts/github.user.js
// @updateURL    https://bd808.github.io/userscripts/github.user.js
// @grant        GM_addStyle
// @grant        GM_getResourceText
// @grant        GM.addStyle
// @grant        GM.getResourceText
// @require      https://greasemonkey.github.io/gm4-polyfill/gm4-polyfill.js
// @resource     usercss https://bd808.github.io/userscripts/github.user.css
// @resource     mdocss https://raw.githubusercontent.com/mdo/github-wide/master/github-wide.css
// ==/UserScript==
GM.addStyle(GM.getResourceText('mdocss'));
GM.addStyle(GM.getResourceText('usercss'));
