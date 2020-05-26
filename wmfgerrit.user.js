// ==UserScript==
// @name         WMF gerrit hacks
// @namespace    http://bd808.com/userscripts/
// @description  Make gerrit look and work like I want it to
// @match        https://gerrit.wikimedia.org/*
// @version      2.19.1
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
// @resource     gerritcss https://bd808.com/userscripts/wmfgerrit.user.css
// ==/UserScript==
GM.getResourceText('gerritcss').then(function(css){GM.addStyle(css);});
