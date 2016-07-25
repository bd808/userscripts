// ==UserScript==
// @name         gmail hacks
// @namespace    http://bd808.com/userscripts/
// @description  Make gmail look and work like I want it to
// @match        https://mail.google.com/*
// @version      0.3
// @author       Bryan Davis
// @license      MiT License; http://opensource.org/licenses/MIT
// @downloadURL  https://bd808.github.io/userscripts/gmail.user.js
// @updateURL    https://bd808.github.io/userscripts/gmail.user.js
// @grant        GM_addStyle
// @grant        GM_getResourceText
// @resource     gmailcss http://bd808.com/userscripts/gmail.user.css
// ==/UserScript==
GM_addStyle(GM_getResourceText('gmailcss'));
