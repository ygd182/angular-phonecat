'use strict';

/* Services */

var phonecatServices = angular.module('phonecatServices', []);

phonecatServices.service('PhoneServices', ['$http',
  function($http) {
  	return $http.get('phones/phones.json');
  }]);