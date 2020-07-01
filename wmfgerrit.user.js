// ==UserScript==
// @name         WMF gerrit hacks
// @namespace    http://bd808.com/userscripts/
// @description  Make gerrit look and work like I want it to
// @match        https://gerrit.wikimedia.org/*
// @match        https://gerrit-test.wikimedia.org/*
// @version      20200630.1
// @author       Bryan Davis
// @license      MIT License; http://opensource.org/licenses/MIT
// @downloadURL  https://bd808.com/userscripts/wmfgerrit.user.js
// @updateURL    https://bd808.com/userscripts/wmfgerrit.user.js
// @grant        GM_addStyle
// @grant        GM_getResourceText
// @grant        GM.addStyle
// @grant        GM.getResourceText
// @grant        GM.getResourceUrl
// @require      https://bd808.com/gm4-polyfill/gm4-polyfill.js
// @require      https://bd808.com/userscripts/waitForKeyElements.js
// @resource     css https://bd808.com/userscripts/wmfgerrit.user.css
// @run-at       document-idle
// ==/UserScript==
GM.getResourceText("css").then(function (css) {
    "use strict";
    var observers = [],
        addShadowStyle = function (rootElm) {
            var $style = rootElm.ownerDocument.createElement("style");
            $style.setAttribute("type", "text/css");
            $style.textContent = css;
            rootElm.appendChild($style);
        },
        observeDOM = function (obj, callback) {
            if (!obj || !obj.nodeType === 1) { return; }
            var obs = new MutationObserver(function(mutations, observer) {
                mutations.forEach(function(record) {
                    record.addedNodes.forEach(function (node) {
                        callback(node);
                    });
                });
            });
            obs.observe(obj, {childList:true, subtree:true});
            observers.push(obs);
        },
        injectCssInShadowDom = function (rootElm) {
            if (rootElm.shadowRoot) {
                let sroot = rootElm.shadowRoot;
                addShadowStyle(sroot);
                waitForKeyElements(sroot, "*", injectCssInShadowDom, false);
                observeDOM(sroot, injectCssInShadowDom);
            }
        };
    GM.addStyle(css);
    setTimeout(function() {
        waitForKeyElements(document.body, "*", injectCssInShadowDom, false);
    }, 500);
});
