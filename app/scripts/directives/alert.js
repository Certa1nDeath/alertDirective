'use strict';

/**
 * @ngdoc directive
 * @name alertDirectiveApp.directive:alert
 * @description
 * # alert
 */
angular.module('alertDirectiveApp')
    .directive('alert', function () {
        return {
            template: '<div class="alert alert-{{type}}">' +
            '<button type="button" class="close"' +
            'ng-click="close()">&times;' +
            '</button>' +
            '<div ng-transclude></div>' +
            '</div>',
            restrict: 'E',
            // ersetze originales Direktivenelement mit gegebenem Template
            replace: true,
            transclude: true,
            scope: {type: '=', close: '&'}
        };
    });
