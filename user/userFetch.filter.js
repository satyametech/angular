(function() {
    'use strict';
    angular.module('formApp')
            .filter('offset', offset);
    function offset() {
        return function(input, start) {
            start = parseInt(start, 10);
            return input.slice(start);
        };
    }
    ;
})();