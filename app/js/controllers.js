'use strict';

/* Controllers */

var phonecatControllers = angular.module('phonecatControllers', ['phonecatServices']);

phonecatControllers.controller('PhoneListCtrl', ['$scope', 'PhoneServices',
  function($scope, PhoneServices) {
  	var onGetPhonesSuccess = function(response){
  		$scope.phonesList = response.data;
  	};

  	var onGetPhonesFailure = function(){
  		console.log('error');
  	};

  	PhoneServices.then(onGetPhonesSuccess, onGetPhonesFailure);
  }]);