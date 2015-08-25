/**
 * Created by donghoon on 15. 8. 25..
 */
angular.module('starter.controllers.accountController', [])

    .controller('LoginCtrl', function ($scope, LoginService, $ionicPopup, $state) {
        $scope.data = {};

        $scope.kakaologinimg = "img/login/kr/kakao_account_login_btn_large_narrow.png";

        $scope.login = function () {
            LoginService.loginUser($scope.data.username, $scope.data.password).success(function (data) {
                var alertPopup = $ionicPopup.alert({
                    title: 'Login Success!',
                    template: 'Welcome user!'
                });
                $state.go('tab.dash');
            }).error(function (data) {
                var alertPopup = $ionicPopup.alert({
                    title: 'Login failed!',
                    template: 'Please check your credentials!'
                });
            });
        }
    });