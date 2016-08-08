// ==UserScript==
// @name         gmail hacks
// @namespace    http://bd808.com/userscripts/
// @description  Make gmail look and work like I want it to
// @match        https://mail.google.com/*
// @version      0.5
// @author       Bryan Davis
// @license      MIT License; http://opensource.org/licenses/MIT
// @downloadURL  https://bd808.github.io/userscripts/gmail.user.js
// @updateURL    https://bd808.github.io/userscripts/gmail.user.js
// @grant        GM_addStyle
// @grant        GM_getResourceText
// @resource     gmailcss http://bd808.com/userscripts/gmail.user.css
// ==/UserScript==
GM_addStyle(GM_getResourceText('gmailcss'));

/* Strip inline message styles */
var interestingNodes = '.gs .ii',
    stripInlineStyles = function() {
        "use strict";
        var msgBody = document.querySelectorAll(interestingNodes),
            remove = ['style', 'face', 'size'],
            strip = function (n) {
                if ('removeAttribute' in n) {
                    for (var i = 0, len = remove.length; i < len; i++) {
                        n.removeAttribute(remove[i]);
                    }
                }
            },
            down = function (n) {
                for (var i = 0, len = n.childNodes.length; i < len; i++) {
                    var c = n.childNodes[i];
                    down(c);
                    strip(c);
                }
            };
        for (var i = 0, len = msgBody.length; i < len; i++) {
            down(msgBody[i]);
        }
    };
/* Run on page load */
stripInlineStyles();

/* Run when new nodes are inserted in the DOM too (open new message)*/
var mutationTarget = document.querySelector(interestingNodes),
    observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            stripInlineStyles();
        });
    });
observer.observe(mutationTarget, { childList: true });
