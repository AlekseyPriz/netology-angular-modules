'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ui.router',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
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

  $stateProvider
    .state(view1State)
    .state(view2State);
})

//   .config(['$routeProvider', function ($routeProvider) {
//   $routeProvider.when('/view1', {
//     templateUrl: 'view1/view1.html',
//     controller: 'View1Ctrl'
//   });
//   $routeProvider.when('/view2', {
//     templateUrl: 'view2/view2.html',
//     controller: 'View2Ctrl'
//   });
// }])

// .config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
//   $locationProvider.hashPrefix('!');
//
//   $routeProvider.otherwise({redirectTo: '/view1'});
// }]);

.controller('appCtrl', function ($scope) {
  $scope.menu = [{
    link: '/view1',
    name: 'view1'
  },{
    link: '/view2',
    name: 'view2'
  }];
});
