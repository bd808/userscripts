// ==UserScript==
// @name Mailman discard
// @namespace http://bd808.com/userscripts/
// @description Automatically selects "Discard" and ticks the "Add" and "Discards" checkboxes on Mailman admin requests for pending messages
// @match https?://*/mailman/admindb/*
// @match https?://*/lists/admindb/*
// @version 0.2.1
// @author Bryan Davis
// @license MIT License; http://opensource.org/licenses/MIT
// @downloadURL https://bd808.com/userscripts/mailman-discard-and-ban.user.js
// @updateURL https://bd808.com/userscripts/mailman-discard-and-ban.user.js
// @grant none
// @run-at document-end
// ==/UserScript==
(function() {
    var inputs = document.getElementsByTagName('input'),
        len = inputs.length;
    for (var i = 0; i < len; i++) {
        var input = inputs[i];
        if (
            input.name.toLowerCase().match(/^senderaction/) &&
            input.value == '3'
           ) {
            input.checked = true;
        } else if (input.name.toLowerCase().match(/^senderfilterp/)) {
            input.checked = true;
        }
    }
})();
