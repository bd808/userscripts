/*--- waitForKeyElements():  A utility function, for Greasemonkey scripts,
    that detects and handles AJAXed content.

    Original: https://gist.github.com/BrockA/2625891
    Non-jQuery version by: Adam Katz,
      https://gist.github.com/adamhotep/7c9068f2196326ab79145ae308b68f9e
    License: CC BY-NC-SA 4.0 (*not* GPL-compatible)
      changes made by Adam Katz (tracked by adamhotep's github gist) are
      also licensed GPL v2+ (but note the CC BY-NC-SA prevents commercial use)
    License via https://gist.github.com/BrockA/2625891#gistcomment-1617026


    Usage example:

        // ==UserScript==
        // …
        // @require	https://git.io/waitForKeyElements.js
        // ==/UserScript==


        waitForKeyElements (
            "div.comments",
            commentCallbackFunction
        );

        //--- Page-specific function to do what we want when the node is found.
        function commentCallbackFunction (elem) {
            elem.innerHTML = "This comment changed by waitForKeyElements().";
        }

*/
function waitForKeyElements (
    documentNode,   /* Required: document to operate on */
    selectorTxt,    /* Required: The querySelector string that
                        specifies the desired element(s).
                    */
    actionFunction, /* Required: The code to run when elements are
                        found. It is passed the matched element.
                    */
    bWaitOnce,      /* Optional: If false, will continue to scan for
                        new elements even after the first match is
                        found.
                    */
    iframeSelector  /* Optional: If set, identifies the iframe to
                       search.
                    */
) {
    var targetNodes, btargetsFound;

    //--- Additionally avoid what we've found
    var selectorClean = selectorTxt.replace(/(,)|$/g, ":not([data-wfke-found])$1");

    if (typeof iframeSelector == "undefined")
        targetNodes     = documentNode.querySelectorAll(selectorClean);
    else {
        targetNodes = [];
        var iframe = documentNode.querySelectorAll(iframeSelector);
        for (var i = 0, il = iframe.length; i < il; i++) {
            var nodes = iframe[i].querySelectorAll(selectorClean);
            if (nodes) targetNodes.concat(Array.from(nodes));
        }
    }

    if (targetNodes  &&  targetNodes.length > 0) {
        btargetsFound   = true;
        //--- Found target node(s).  Go through each and act if they are new.
        for (var t = 0, tl = targetNodes.length; t < tl; t++) {

            if (!targetNodes[t].getAttribute("data-wfke-found")) {
                //--- Call the payload function.
                var cancelFound = false;
                try {
                    cancelFound     = actionFunction (targetNodes[t]);
                }
                //--- Log errors to console rather than stopping altogether
                catch (error) {
                    var name = actionFunction.name;
                    if (name)
                        name = 'in function "' + name + '":\n';
                    console.log ("waitForKeyElements: actionFunction error\n"
                        + name + error);
                }
                if (cancelFound)
                    btargetsFound   = false;
                else
                    targetNodes[t].setAttribute("data-wfke-found", true);
            }
        }
    }
    else {
        btargetsFound   = false;
    }

    //--- Get the timer-control variable for this selector.
    var controlObj      = waitForKeyElements.controlObj  ||  {};
    var controlKey      = selectorTxt.replace (/[^\w]/g, "_");
    var timeControl     = controlObj [controlKey];

    //--- Now set or clear the timer as appropriate.
    if (btargetsFound  &&  bWaitOnce  &&  timeControl) {
        //--- The only condition where we need to clear the timer.
        clearInterval (timeControl);
        delete controlObj [controlKey]
    }
    else {
        //--- Set a timer, if needed.
        if ( ! timeControl) {
            timeControl = setInterval ( function () {
                    waitForKeyElements (    documentNode,
                                            selectorTxt,
                                            actionFunction,
                                            bWaitOnce,
                                            iframeSelector
                                        );
                },
                300
            );
            controlObj [controlKey] = timeControl;
        }
    }
    waitForKeyElements.controlObj   = controlObj;
}
