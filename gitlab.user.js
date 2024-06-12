// ==UserScript==
// @name         gitlab hacks
// @namespace    http://bd808.com/userscripts/
// @description  Make gitlab look and work like I want it to
// @match        https://gitlab.com/*
// @match        https://gitlab.wikimedia.org/*
// @match        https://gitlab.local.wmftest.net:8084/*
// @version      20240612.00
// @author       Bryan Davis
// @license      MiT License; http://opensource.org/licenses/MIT
// @downloadURL  https://bd808.com/userscripts/gitlab.user.js
// @updateURL    https://bd808.com/userscripts/gitlab.user.js
// @grant        GM_addStyle
// @grant        GM_getResourceText
// @grant        GM.addStyle
// @grant        GM.getResourceText
// @grant        GM.getResourceUrl
// @require      https://bd808.com/gm4-polyfill/gm4-polyfill.js
// @resource     usercss https://bd808.com/userscripts/gitlab.user.css
// ==/UserScript==
(function() {
	'use strict';
	GM.getResourceText('usercss').then(function(css){GM.addStyle(css);});

	// Display (most) times in UTC
	const times = Array.from(document.getElementsByTagName('time'));
	times.forEach(el => {
		const dt = el.getAttribute( 'datetime' );
		if ( dt ) {
			el.innerHTML = (new Date( dt )).toLocaleString(
				'sv-SE',
				{
					timeZone: 'UTC',
					dateStyle: 'short',
					timeStyle: 'short'
				}
			) + ' Z';
		}
	});

	// https://gist.github.com/Gabrielcarvfer/9a89545231138797596d76a86fe85af4
	const tbc = document.getElementsByClassName("top-bar-container");
	// Create subdivision to hold buttons on the far-right of the screen
	const rbd = document.createElement('div');
	rbd.id = "good_old_menu";

	rbd.class = "gl-display-flex gl-p-3 gl-gap-1 gl-flex-direction-column";
	// Copy search bar
	rbd.appendChild(document.getElementById('super-sidebar-search'));
	// Copy issues button
	rbd.appendChild(document.querySelectorAll('[data-testid="issues-shortcut-button"]')[0]);
	// Copy merge requests button
	rbd.appendChild(document.querySelectorAll('[data-testid="merge-requests-shortcut-button"]')[0]);
	// Copy todo button
	rbd.appendChild(document.querySelectorAll('[data-testid="todos-shortcut-button"]')[0]);
	// Copy + button
	rbd.appendChild(document.getElementById('create-menu-toggle'));
	// Copy user button
	rbd.appendChild(document.querySelectorAll('[data-testid="user-dropdown"]')[0]);

	// Adjust display to inline-block to get them in a row
	for (var i = 0; i < rbd.children.length; i++) {
		// Prevent merge requests button from being weird
		rbd.children[i].classList.remove("gl-w-full");
		rbd.children[i].style.display = "inline-block";
		// Add some spacing
		rbd.children[i].style.padding = "8px";
	}
	// Put the top bar back to where it belong
	tbc[0].appendChild(rbd);

	var tles = document.querySelectorAll('[data-testid="static-items-section"]')[0];
	if (tles) {
		tles = tles.parentElement;
		// Move useful sections to the outer list
		var pinned_entries = [
			"activity",
			"files",
			"project_issue_list",
			"project_merge_request_list",
			"pipelines"
		]
		for (i = 0; i < pinned_entries.length; i++) {
			var entry_to_move = document.querySelectorAll('[data-track-label="'+pinned_entries[i]+'"]')[0];
			if (entry_to_move) {
				tles.appendChild(entry_to_move);
			}
		}
	}
	var elements_to_remove = [
		"menu-section-button-pinned",
		"menu-section-button-plan",
		"menu-section-button-manage",
		"menu-section-button-code",
		"menu-section-button-build",
		"menu-section-button-deploy",
		"menu-section-button-operate",
		"menu-section-button-monitor",
		"menu-section-button-analyze"
	]
	for (i = 0; i < elements_to_remove.length; i++) {
		var lmstr = document.getElementById(elements_to_remove[i]);
		if (lmstr) {
			lmstr.parentElement.innerHTML = "";
		}
	}
})();

// TODO: figure out how to kill or patch super_sidebar/super_sidebar_collapsed_state_manager.js
// Maybe just fork from https://gist.github.com/Gabrielcarvfer/9a89545231138797596d76a86fe85af4
