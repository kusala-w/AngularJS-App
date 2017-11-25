var apiUri = 'http://usa-presidents-api.azurewebsites.net';

app = angular.module('usa-presidents', []);

app.controller('PresidentController', function ($scope, $http) {
    $http({
        method: 'GET',
        url: apiUri + '/api/presidents'
    })
    .then(function successCallback(response) {
        $scope.presidents = response.data;
    },
    function errorCallback(response) {
        console.log('Web API call failed!');            
    });
});