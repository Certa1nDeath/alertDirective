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
  });
