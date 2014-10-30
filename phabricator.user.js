// ==UserScript==
// @name         phabricator hacks
// @namespace    http://bd808.com/userscripts/
// @description  Make phabricator look and work like I want it to
// @match        https://secure.phabricator.com/*
// @match        https://phabricator.wikimedia.org/*
// @match        https://bugzillapreview.wmflabs.org/*
// @version      0.7
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

/* Hide spammy events */
(function() {
    "use strict";
    var nodes = document.querySelectorAll('.phui-timeline-event-view'),
        nodesLen = nodes.length,
        spam = /created this task|(added|removed) (a )?(subscriber|project)|(changed|set) Security (from|to)|moved this task to|awarded a token|(raised|lowered) the priority of this task/;
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
        } else {
            /* All items ended up hidden, so hide the whole minor event */
            nodes[nodeIdx].style.display = 'none';
        }
    }
})();

/* link bugzilla references to original bug */
(function() {
    "use strict";
    var nodes = document.querySelectorAll('.phui-property-list-value'),
        nodesLen = nodes.length,
        bzIdRegex = /\b(bz(\d+))\b/,
        bzLink = '<a href="https://bugzillaphabricator.wikimedia.org?id=$2">$1</a>';
    for (var nodeIdx = 0; nodeIdx < nodesLen; nodeIdx++) {
        if (bzIdRegex.test(nodes[nodeIdx].innerHTML)) {
            nodes[nodeIdx].innerHTML =
                nodes[nodeIdx].innerHTML.replace( bzIdRegex, bzLink );
        }
    }
})();

/* vim:sw=4:ts=4:sts=4:et: */
