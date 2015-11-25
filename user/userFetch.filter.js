(function() {
    'use strict';
    angular.module('formApp')
            .filter('offset', offset);
    function offset() {
        return function(input, start) {
        if (!input || !input.length) { return; }
            start = +start;
            return input.slice(start);
        };
    }
    ;
})();
