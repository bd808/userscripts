// ==UserScript==
// @name         phabricator hacks
// @namespace    http://bd808.com/userscripts/
// @description  Make phabricator look and work like I want it to
// @match        https://secure.phabricator.com/*
// @match        https://phabricator.wikimedia.org/*
// @version      0.3
// @author       Bryan Davis
// @license      MiT License; http://opensource.org/licenses/MIT
// @downloadURL  http://bd808.com/userscripts/phabricator.user.js
// @updateURL    http://bd808.com/userscripts/phabricator.user.js
// @grant        GM_addStyle
// @grant        GM_getResourceText
// @resource     css http://bd808.com/userscripts/phabricator.user.css
// ==/UserScript==

/* Load custom css */
GM_addStyle(GM_getResourceText('css'));

/* Hide spammy minor events */
(function() {
    "use strict";
    var nodes = document.querySelectorAll('.phui-timeline-minor-event'),
        nodesLen = nodes.length,
        spam = /created this task|added (a )?(subscriber|project)|changed Security from|moved this task to|awarded a token/;
    for (var nodeIdx = 0; nodeIdx < nodesLen; nodeIdx++) {
        var kids = nodes[nodeIdx].querySelectorAll('.phui-timeline-title'),
            kidsLen = kids.length,
            firstVisible = kidsLen + 1;
        for (var kidIdx = 0; kidIdx < kidsLen; kidIdx++) {
            if (kids[kidIdx].innerHTML.match(spam)) {
                kids[kidIdx].style.display = 'none';
            } else {
                firstVisible = Math.min(firstVisible, kidIdx);
            }
        }
        if (firstVisible < kidsLen) {
            /* Not all items hidden, so move the timestamp to the first
             * visible item in the list.
             */
            var extra = kids[0].querySelector('.phui-timeline-extra');
            kids[firstVisible].appendChild(extra);
        }
    }
})();

/* vim:sw=4:ts=4:sts=4:et: */
