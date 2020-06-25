// ==UserScript==
// @name         WMF gerrit hacks
// @namespace    http://bd808.com/userscripts/
// @description  Make gerrit look and work like I want it to
// @match        https://gerrit.wikimedia.org/*
// @match        https://gerrit-test.wikimedia.org/*
// @version      20200625.1
// @author       Bryan Davis
// @license      MIT License; http://opensource.org/licenses/MIT
// @downloadURL  https://bd808.com/userscripts/wmfgerrit.user.js
// @updateURL    https://bd808.com/userscripts/wmfgerrit.user.js
// @grant        GM_addStyle
// @grant        GM_getResourceText
// @grant        GM.addStyle
// @grant        GM.getResourceText
// @grant        GM.getResourceUrl
// @require      https://bd808.com/gm4-polyfill/gm4-polyfill.js
// @resource     css https://bd808.com/userscripts/wmfgerrit.user.css
// ==/UserScript==
GM.getResourceText('css').then(function(css){GM.addStyle(css);});
