// ==UserScript==
// @name         youtube style tweaks
// @namespace    http://bd808.com/userscripts/
// @description  Restyle YouTube to spark more joy
// @match        https://youtube.com/*
// @version      0.1.0
// @author       Bryan Davis
// @license      MIT License; http://opensource.org/licenses/MIT
// @downloadURL  https://bd808.com/userscripts/youtube.user.js
// @updateURL    https://bd808.com/userscripts/youtube.user.js
// @grant        GM_addStyle
// @grant        GM_getResourceText
// @grant        GM.addStyle
// @grant        GM.getResourceText
// @grant        GM.getResourceUrl
// @require      https://bd808.com/gm4-polyfill/gm4-polyfill.js
// @resource     css https://bd808.com/userscripts/youtube.user.css
// @run-at       document-idle
// ==/UserScript==
GM.getResourceText("css").then(function(css){GM.addStyle(css);});
