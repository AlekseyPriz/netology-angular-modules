'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ui.router',
  'myApp.view1',
  'myApp.view2',
  'myApp.version',
  'myApp.account',
  'ui.mask'
])

.config(function($stateProvider) {
  var view1State = {
    name: 'view1',
    url: '/view1',
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  };

  var view2State = {
    name: 'view2',
    url: '/view2',
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  };

  var myaccount = {
    name: 'myaccount',
    url: '/myaccount',
    templateUrl: 'myaccount/myaccount.html',
    controller: 'myaccountCtrl as vm'
  };

  $stateProvider
    .state(view1State)
    .state(view2State)
    .state(myaccount);

})

.controller('appCtrl', function ($scope) {

  $scope.view1 = 'view1';

  $scope.view2 = 'view2';

  $scope.myaccount = 'myaccount'

});
