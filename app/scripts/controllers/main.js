'use strict';

/**
 * @ngdoc function
 * @name alertDirectiveApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the alertDirectiveApp
 */
angular.module('alertDirectiveApp')
    .controller('MainCtrl', function ($scope) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.alerts = [
            {type: 'danger', msg: 'Danger!'},
            {type: 'info', msg: 'Info!'},
            {type: 'warning', msg: 'Warning!'}
        ];

        $scope.closeAlert = function(index) {
            $scope.alerts.splice(index, 1);
        };
    });
