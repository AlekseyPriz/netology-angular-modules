'use strict';

angular.module('myApp.account', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
      $routeProvider.when('/myaccount', {
        templateUrl: 'myaccount/myaccount.html',
        controller: 'myaccountCtrl'
      });
    }])

   .controller('myaccountCtrl', function($scope) {

     $scope.master= {};

     $scope.update = function(user) {
       $scope.master= angular.copy(user);
     };

     $scope.reset = function() {
       $scope.user = angular.copy($scope.master);
     };

     $scope.reset();

  //
  //   var vm = this;
  //   vm.newPokemon = {};
  //   vm.addPokemon = function(myPokemon) {
  //     console.log(myPokemon);
  //     vm.newPokemon = {};
  //   };

  });