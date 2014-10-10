// ==UserScript==
// @name         gmail hacks
// @namespace    http://bd808.com/userscripts
// @version      0.2
// @description  Make gmail look and work like I want it to
// @author       Bryan Davis
// @match        https://mail.google.com/*
// @grant        GM_addStyle
// @grant        GM_getResourceText
// @resource     gmailcss http://bd808.com/userscripts/gmail.user.css
// @downloadURL  http://bd808.com/userscripts/gmail.user.js
// @updateURL    http://bd808.com/userscripts/gmail.user.js
// ==/UserScript==
GM_addStyle(GM_getResourceText('gmailcss'));
