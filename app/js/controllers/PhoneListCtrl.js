phonecatControllers.controller('PhoneListCtrl', ['$scope', 'PhoneServices',
  function($scope, PhoneServices) {
    function onGetPhonesSuccess(response){
       $scope.phonesList = response.data;
    }

    function onGetPhonesFailure(){
       console.log('error');
    }

    var init = function(){
       PhoneServices.getPhones().then(onGetPhonesSuccess, onGetPhonesFailure);
    }

    init();
}]);