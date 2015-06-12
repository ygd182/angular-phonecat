'use strict';

/* Services */

var phonecatServices = angular.module('phonecatServices', []);

phonecatServices.service('PhoneServices', ['$http',
  function($http) {
  	var getPhones = function () {
  		return $http.get('phones/phones.json');
  	};

  	var getPhoneById = function(id) {
  		return $http.get('phones/'+id+'.json');
  	};

  	return {
  			 getPhones: getPhones,
			   getPhoneById: getPhoneById
		};
  }]);