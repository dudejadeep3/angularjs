var application = angular.module('mainApp',[]);

application.directive('myFirstDirective',function(){

    return{
        restrict: 'EA',
        scope: {
            name:'@',
            age: '=',
            func:'&'
        },
        template: ['<p>Value of name in directive: {{name}}</p>', '<p>Enter new Name : <input type="text" ng-model="name"></p>',
        '<p>Value of age in directive is {{age}}</p>',
        '<p>Enter a new age: <input type="text" ng-model="age"></p>',
        '<p>Alert from directive: <input type="button" value="Alert from directive" ng-click="func()"></p>'].join('')
    }
});

application.controller('app',function($scope){
    $scope.controllerProperty= 'This is controller specific property';
    $scope.name='codedamn';
    $scope.age=100;
    $scope.alertTheName=function(){
        alert($scope.name);
    }
});

//@ - text bind
// = - two way bind
// & - one way bind