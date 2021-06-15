// ==UserScript==
// @name         pheedloop.com tweaks
// @namespace    http://bd808.com/userscripts/
// @description  Fix stuff so it sucks less
// @match        https://pheedloop.com/*
// @version      0.1.0
// @author       Bryan Davis
// @license      MIT License; http://opensource.org/licenses/MIT
// @downloadURL  https://bd808.com/userscripts/pheedloop.user.js
// @updateURL    https://bd808.com/userscripts/pheedloop.user.js
// @grant        GM_addStyle
// @grant        GM_getResourceText
// @grant        GM.addStyle
// @grant        GM.getResourceText
// @grant        GM.getResourceUrl
// @require      https://bd808.com/gm4-polyfill/gm4-polyfill.js
// @require      https://bd808.com/userscripts/waitForKeyElements.js
// @resource     css https://bd808.com/userscripts/pheedloop.user.css
// ==/UserScript==
GM.getResourceText('css').then(function(css){GM.addStyle(css);});
