phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'PhoneServices',
  function($scope, $routeParams, PhoneServices) {
    $scope.phoneId = $routeParams.phoneId;

    function onGetPhoneDetailSuccess(response){
        $scope.phone = response.data;
        $scope.selectedImage = $scope.phone.images[0];
    }

    function onGetPhoneDetailFailure(){
        console.log('error');
    }

    function init(){
      PhoneServices.getPhoneById($scope.phoneId).then(onGetPhoneDetailSuccess, onGetPhoneDetailFailure);
      $scope.setImage = function(imageUrl){
        $scope.selectedImage = imageUrl;
      }
    }
    init();
}]);