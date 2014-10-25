// ==UserScript==
// @name         phabricator hacks
// @namespace    http://bd808.com/userscripts
// @description  Make phabricator look and work like I want it to
// @match        https://secure.phabricator.com/*
// @match        https://phabricator.wikimedia.org/*
// @version      0.2
// @author       Bryan Davis
// @license      MiT License; http://opensource.org/licenses/MIT
// @downloadURL  http://bd808.com/userscripts/phabricator.user.js
// @updateURL    http://bd808.com/userscripts/phabricator.user.js
// @grant        GM_addStyle
// @grant        GM_getResourceText
// @resource     css http://bd808.com/userscripts/phabricator.user.css
// ==/UserScript==
GM_addStyle(GM_getResourceText('css'));
