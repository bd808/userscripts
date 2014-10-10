// ==UserScript==
// @name         phabricator hacks
// @namespace    http://bd808.com/userscripts
// @version      0.1
// @description  Make phabricator look and work like I want it to
// @author       Bryan Davis
// @match        https://secure.phabricator.com/*
// @match        https://phabricator.wikimedia.org/*
// @grant        GM_addStyle
// @grant        GM_getResourceText
// @resource     css http://bd808.com/userscripts/phabricator.user.css
// @downloadURL  http://bd808.com/userscripts/phabricator.user.js
// @updateURL    http://bd808.com/userscripts/phabricator.user.js
// ==/UserScript==
GM_addStyle(GM_getResourceText('css'));
