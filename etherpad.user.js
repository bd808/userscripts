// ==UserScript==
// @name         etherpad style tweaks
// @namespace    http://bd808.com/userscripts/
// @description  Less whitespace in etherpad-lite
// @match        https://etherpad.wikimedia.org/p/*
// @version      0.9.2
// @author       Bryan Davis
// @license      MIT License; http://opensource.org/licenses/MIT
// @downloadURL  https://bd808.com/userscripts/etherpad.user.js
// @updateURL    https://bd808.com/userscripts/etherpad.user.js
// @grant        GM_addStyle
// @grant        GM_getResourceText
// @grant        GM.addStyle
// @grant        GM.getResourceText
// @grant        GM.getResourceUrl
// @require      https://bd808.com/gm4-polyfill/gm4-polyfill.js
// @require      https://bd808.com/userscripts/waitForKeyElements.js
// @resource     css https://bd808.com/userscripts/etherpad.user.css
// @run-at       document-idle
// ==/UserScript==

/* Load custom css in every iframe.
 * Based on https://stackoverflow.com/a/55837286/8171 by Adam Katz
 */
GM.getResourceText("css").then(function (css) {
    "use strict";
    var addStyle = function (doc) {
            var $style = doc.createElement("style");
            $style.setAttribute("type", "text/css");
            $style.textContent = css;
            doc.getElementsByTagName("head")[0].appendChild($style);
        },
        frameSelector = "frame, iframe",
        updateFrame = function (elem) {
            var doc = elem.contentWindow.document,
                frameList = doc.querySelectorAll(frameSelector);
            doc.body.removeAttribute("data-wfke-found");
            addStyle(doc);
            doc.body.setAttribute("been_there", 1);
            frameList.forEach(function (frame) {
                let fdoc = frame.contentWindow.document;
                if (!fdoc.body.getAttribute("been_there")) {
                    addStyle(fdoc);
                    fdoc.body.setAttribute("been_there", 1);
                    waitForKeyElements(fdoc, frameSelector, updateFrame, false);
                }
            });
        };
    addStyle(document);
    waitForKeyElements(document, frameSelector, updateFrame, false);
});
