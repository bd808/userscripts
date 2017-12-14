// ==UserScript==
// @name         WMF gerrit hacks
// @namespace    http://bd808.com/userscripts/
// @description  Make gerrit look and work like I want it to
// @match        https://gerrit.wikimedia.org/*
// @version      2.15
// @author       Bryan Davis
// @license      MIT License; http://opensource.org/licenses/MIT
// @downloadURL  https://bd808.github.io/userscripts/wmfgerrit.user.js
// @updateURL    https://bd808.github.io/userscripts/wmfgerrit.user.js
// @grant        GM_addStyle
// @grant        GM_getResourceText
// @grant        GM.addStyle
// @grant        GM.getResourceText
// @require      https://bd808.github.io/gm4-polyfill/gm4-polyfill.js
// @resource     gerritcss https://bd808.github.io/userscripts/wmfgerrit.user.css
// ==/UserScript==
GM.addStyle(GM.getResourceText('gerritcss'));
