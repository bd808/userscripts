// ==UserScript==
// @name         etherpad personal settings
// @namespace    http://bd808.com/userscripts/
// @description  Don't use this unless you are bd808!
// @match        https://etherpad.wikimedia.org/p/*
// @version      0.9
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
        updateFrame = function (elem) {
            elem.removeAttribute("wfke_found");
            for (let f=0; f < frames.length; f++) {
                let doc = frames[f].document;
                if (!doc.body.getAttribute("been_there")) {
                    addStyle(doc);
                    doc.body.setAttribute("been_there", 1);
                    waitForKeyElements(doc, "iframe, frame", updateFrame, false);
                }
            }
        };
    updateFrame(document);
    waitForKeyElements(document, "iframe, frame", updateFrame, false);
});

/* Try to set pad username and color */
(function() {
    "use strict";
    var interval = window.setInterval(
        function() {
            if (window.hasOwnProperty("pad")) {
                pad.notifyChangeColor("#fdf6e3");
                pad.notifyChangeName("bd808");
                window.clearInterval(interval);
            }
        },
        500
    );
})();
