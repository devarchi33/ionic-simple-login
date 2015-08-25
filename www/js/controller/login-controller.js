/**
 * Created by donghoon on 15. 8. 25..
 */
angular.module('starter.controllers.loginController', [])

    .controller('AccountCtrl', function ($scope) {
        $scope.settings = {
            enableFriends: true
        };
    });