// ==UserScript==
// @name         phabricator hacks
// @namespace    http://bd808.com/userscripts/
// @description  Make phabricator look and work like I want it to
// @match        https://secure.phabricator.com/*
// @match        https://phabricator.wikimedia.org/*
// @match        https://bugzillapreview.wmflabs.org/*
// @version      0.30
// @author       Bryan Davis
// @license      MiT License; http://opensource.org/licenses/MIT
// @downloadURL  https://bd808.github.io/userscripts/phabricator.user.js
// @updateURL    https://bd808.github.io/userscripts/phabricator.user.js
// @grant        GM_addStyle
// @grant        GM_getResourceText
// @resource     css http://bd808.com/userscripts/phabricator.user.css
// ==/UserScript==

/* Load custom css */
GM_addStyle(GM_getResourceText('css'));

/* Hide spammy events */
var hideSpammyEvents = function() {
    "use strict";
    var nodes = document.querySelectorAll('.phui-timeline-minor-event'),
        nodesLen = nodes.length,
        spam = /(added|removed) (a )?(subscriber|project)|(changed|set) Security (from|to)|moved this task to|awarded a token|(raised|lowered) the priority of this task|triaged this task as|changed the title from/;
    for (var nodeIdx = 0; nodeIdx < nodesLen; nodeIdx++) {
        var kids = nodes[nodeIdx].querySelectorAll('.phui-timeline-title'),
            kidsLen = kids.length,
            firstVisible = kidsLen + 1;
        for (var kidIdx = 0; kidIdx < kidsLen; kidIdx++) {
            if (kids[kidIdx].innerHTML.match(spam)) {
                // console.log('Hiding : ' + kids[kidIdx].outerHTML);
                kids[kidIdx].style.display = 'none';
            } else {
                firstVisible = Math.min(firstVisible, kidIdx);
            }
        }
        if (firstVisible < kidsLen) {
            // Not all items hidden, so move the timestamp to the first
            // visible item in the list.
            var extra = kids[0].querySelector('.phui-timeline-extra');
            kids[firstVisible].appendChild(extra);
        } else {
            // All items ended up hidden, so hide the whole minor event
            nodes[nodeIdx].style.display = 'none';
        }
    }
}
/* Run on page load */
hideSpammyEvents();
/* Run when new nodes are inserted in the DOM too (Show Older Changes) */
var mutationTarget = document.querySelector('.phui-timeline-view'),
    observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            hideSpammyEvents();
        });
    });
observer.observe(mutationTarget, { childList: true });

/* Link bugzilla references to original bug */
(function() {
    "use strict";
    var nodes = document.querySelectorAll('.phui-property-list-value'),
        nodesLen = nodes.length,
        bzIdRegex = /\b(bz(\d+))\b/,
        bzLink = '<a href="https://bugzilla.wikimedia.org/show_bug.cgi?id=$2">$1</a> <smaller>(<a href="https://old-bugzilla.wikimedia.org/show_bug.cgi?id=$2" target="_blank">bz</a>)</smaller>';
    for (var nodeIdx = 0; nodeIdx < nodesLen; nodeIdx++) {
        if (bzIdRegex.test(nodes[nodeIdx].innerHTML)) {
            nodes[nodeIdx].innerHTML =
                nodes[nodeIdx].innerHTML.replace( bzIdRegex, bzLink );
        }
    }
})();

/* Hide tags for archived projects */
(window.setTimeout(function() {
    "use strict";
    var disabled = document.querySelectorAll('li a.phui-tag-shade-disabled'),
        disabledLen = disabled.length;
    for (var disabledIdx = 0; disabledIdx < disabledLen; disabledIdx++) {
        disabled[disabledIdx].parentNode.style.display = 'none';
    }
},50))();

/* Task view sidebar (See https://phabricator.wikimedia.org/T133825#2248790) */
(function() {
    "use strict";
    var sidebarSel = '#phabricator-standard-page-body .phui-side-column',
        sidebar = document.querySelector(sidebarSel),
        misplacedSel = '.phui-box .phui-curtain-panel',
        misplacedDetails = sidebar.querySelectorAll(misplacedSel),
        detailsSel = '#phabricator-standard-page-body .phui-property-list-properties',
        details = document.querySelector(detailsSel);
    for ( var i = misplacedDetails.length - 1; i >= 0; i-- ) {
        var n = misplacedDetails.item( i ),
            k = n.querySelector( '.phui-curtain-panel-header' ),
            v = n.querySelector( '.phui-curtain-panel-body' ),
            dt = document.createElement( 'dt' ),
            dd = document.createElement( 'dd' );
        dt.className = 'phui-property-list-key';
        while ( k.firstChild ) {
            dt.appendChild( k.firstChild );
        }
        dd.className = 'phui-property-list-value';
        while ( v.firstChild ) {
            dd.appendChild( v.firstChild );
        }
        details.insertBefore( dd, details.firstChild );
        details.insertBefore( dt, details.firstChild );
        n.parentNode.removeChild( n );
    }
})();

/* Add a shortcut to unread notifications */
/* FIXME: doesn't work. Needs to watch for the div being created. */
(function() {
    "use strict";
    var nodes = document.querySelectorAll('.phabricator-notification-header');
    if ( nodes.length > 0 ) {
        nodes[0].innerHTML = nodes[0].innerHTML +
            '<a href="/notification/query/unread/" class="phabricator-notification-unread">Unread</a>';
    }
})();

/* vim:sw=4:ts=4:sts=4:et: */
