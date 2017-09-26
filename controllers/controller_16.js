var app = angular.module('mainApp',[]);

app.controller('people',function($scope, $http){
    $http.get('http://localhost:99/database_16.json')
    .success(function(response){
        $scope.persons=response.records;
    });
});