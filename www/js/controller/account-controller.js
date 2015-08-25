/**
 * Created by donghoon on 15. 8. 25..
 */

angular.module('starter.controllers.accountController', [])

  .controller('AccountCtrl', ['$scope', function ($scope) {
    $scope.settings = {
      enableFriends: true
    };
  }]);
