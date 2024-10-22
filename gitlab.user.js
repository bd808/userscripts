// ==UserScript==
// @name         gitlab hacks
// @namespace    http://bd808.com/userscripts/
// @description  Make gitlab look and work like I want it to
// @match        https://gitlab.com/*
// @match        https://gitlab.wikimedia.org/*
// @match        https://gitlab.local.wmftest.net:8084/*
// @version      20241022.01
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
	document.onreadystatechange = function () {
		if (document.readyState == "complete") {
			displayUTCTimes();
		}
	}

	const iso8601DateTimePattern = /\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}Z/;
	const showUTCTime = function (el) {
		if (!el.textContent.match(iso8601DateTimePattern) {
			// Display time in UTC
			const dt = el.getAttribute('datetime');
			if ( dt ) {
				el.innerHTML = (new Date(dt)).toLocaleString(
					'sv-SE',  // Uses ISO 8601 compatible formats
					{
						timeZone: 'UTC',
						dateStyle: 'short',
						timeStyle: 'short'
					}
				) + 'Z';
			}
		}
	};
	const displayUTCTimes = function () {
		const targetNode = document.getElementsByTagName('body')[0];
		const config = { attributes: true, childList: true, subtree: true };
		const callback = function (mutationsList, observer) {
			for (let mutation of mutationsList) {
				const times = mutation.target.querySelectorAll('time');
				if (times.length > 0) {
					for (let el of times) {
						showUTCTime(el);
					}
				} else if (
						mutation.type == 'childList' &&
						mutation.target.nodeName === 'TIME'
				) {
					showUTCTime(mutation.target);
				}
			}
		};
		const observer = new MutationObserver(callback);
		observer.observe(targetNode, config);
		const initialTimes = targetNode.getElementsByTagName('time');
		for (let element of initialTimes) {
			showUTCTime(element);
		}
	};

	const changeNavLayout = function () {
		// https://gist.github.com/Gabrielcarvfer/9a89545231138797596d76a86fe85af4
		// Create subdivision to hold buttons on the far-right of the screen
		const rbd = document.createElement('div');
		rbd.id = "good_old_menu";
		rbd.class = "gl-display-flex gl-p-3 gl-gap-1 gl-flex-direction-column";

		// Copy search bar
		rbd.appendChild(document.getElementById('super-sidebar-search'));
		// Copy issues button
		rbd.appendChild(
			document.querySelectorAll('[data-testid="issues-shortcut-button"]'
		)[0]);
		// Copy merge requests button
		const mrDiv = document.querySelectorAll(
			'[data-testid="merge-requests-shortcut-button"]'
		)[0].parentElement.parentElement;
		mrDiv.classList.remove("gl-display-block!")
		rbd.appendChild(mrDiv);
		// Copy todo button
		rbd.appendChild(
			document.querySelectorAll(
				'[data-testid="todos-shortcut-button"]'
			)[0]
		);
		// Copy + button
		rbd.appendChild(document.getElementById('create-menu-toggle'));
		// Copy user button
		rbd.appendChild(
			document.querySelectorAll('[data-testid="user-dropdown"]')[0]
		);

		// Adjust display to inline-block to get them in a row
		for (var i = 0; i < rbd.children.length; i++) {
			// Prevent merge requests button from being weird
			rbd.children[i].classList.remove("gl-w-full");
			rbd.children[i].style.display = "inline-block";
			// Add some spacing
			rbd.children[i].style.padding = "8px";
		}
		// Put the top bar back to where it belong
		const topBar = document.getElementsByClassName("top-bar-container")[0];
		topBar.appendChild(rbd);
	};
})();
