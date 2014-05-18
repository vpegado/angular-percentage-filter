angular.module('percentage', [])
    .filter('percentage', function ($window) {
        return function (input, decimals, suffix) {
            decimals = decimals || 3;
            suffix = suffix || '%';
            if ($window.isNaN(input)) {
                return '';
            }
            return Math.round(input * Math.pow(10, deciamls + 2))/Math.pow(10, decimals) + suffix
        };
    });
