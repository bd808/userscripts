// ==UserScript==
// @name         gcal hacks
// @namespace    http://bd808.com/userscripts/
// @description  Make gcal look and work like I want it to
// @match        https://calendar.google.com/*
// @version      0.3
// @author       Bryan Davis
// @license      MIT License; http://opensource.org/licenses/MIT
// @downloadURL  https://bd808.github.io/userscripts/gcal.user.js
// @updateURL    https://bd808.github.io/userscripts/gcal.user.js
// @grant        GM_addStyle
// @grant        GM_getResourceText
// @grant        GM.addStyle
// @grant        GM.getResourceText
// @require      https://greasemonkey.github.io/gm4-polyfill/gm4-polyfill.js
// @resource     gcalcss https://bd808.github.io/userscripts/gcal.user.css
// ==/UserScript==
GM.getResourceText('gcalcss').then(function(css){GM.addStyle(css);});
