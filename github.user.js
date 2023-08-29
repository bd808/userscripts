// ==UserScript==
// @name         github hacks
// @namespace    http://bd808.com/userscripts/
// @description  Make github look and work like I want it to
// @match        https://github.com/*
// @version      20230829.01
// @author       Bryan Davis
// @license      MiT License; http://opensource.org/licenses/MIT
// @downloadURL  https://bd808.com/userscripts/github.user.js
// @updateURL    https://bd808.com/userscripts/github.user.js
// @grant        GM_addStyle
// @grant        GM_getResourceText
// @grant        GM.addStyle
// @grant        GM.getResourceText
// @grant        GM.getResourceUrl
// @require      https://bd808.com/gm4-polyfill/gm4-polyfill.js
// @resource     usercss https://bd808.com/userscripts/github.user.css
// ==/UserScript==
GM.getResourceText('usercss').then(function(css){GM.addStyle(css);});
