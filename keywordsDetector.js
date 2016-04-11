(function ( global ) {
    'use strict';

    const GLOBAL_KEY = 'detectKeywords';

    function detectKeywords ( txt ) {
        let tokens = txt.toLowerCase().trim().split(/[\s.,;!?]+/);
        // TODO
    }

    try {
        if ( typeof define === 'function' && define.amd ) {
            define(function () {
                return detectKeywords;
            });
        } else if ( typeof module !== 'undefined' && typeof require === 'function' ) {
            module.exports = detectKeywords;
        }
    } catch ( ex ) {
        (function () {
            var oldGlobal = global[GLOBAL_KEY];
            detectKeywords.noConflict = function () {
                global[GLOBAL_KEY] = oldGlobal;
                return this;
            };
        }());
        global[GLOBAL_KEY] = detectKeywords;
    }
}(Function('return this')()));