// ==UserScript==
// @name         WMF gerrit hacks
// @namespace    http://bd808.com/userscripts/
// @description  Make gerrit look and work like I want it to
// @match        https://gerrit.wikimedia.org/*
// @version      0.4.3
// @author       Bryan Davis
// @license      MIT License; http://opensource.org/licenses/MIT
// @downloadURL  https://bd808.github.io/userscripts/wmfgerrit.user.js
// @updateURL    https://bd808.github.io/userscripts/wmfgerrit.user.js
// @grant        GM_addStyle
// @grant        GM_getResourceText
// @resource     gerritcss http://bd808.com/userscripts/wmfgerrit.user.css
// ==/UserScript==
GM_addStyle(GM_getResourceText('gerritcss'));
