var application = angular.module('mainApp',[]);

application.directive('myFirstDirective',function(){

    /*function linkFunction(scope,elem, attrs){
        elem.bind('click',function(){
            console.log(elem[0].innerHTML);
        })
    };

    return {
            template: 'Hello World!',
            restrict: 'EA',
            link: linkFunction  
    };*/

    function linkFunction($scope, elem, attrs){
        $scope.name= "Hello World";
        $scope.changeName= function(newName){
            $scope.name=$scope.controllerProperty;
        }
    }
    return{
        restrict: 'EA',
        scope: {},
        link: linkFunction,
        template: '<span ng-click= "changeName()">current text: {{name}}</span>'
    }
});

application.controller('app',function($scope){
    $scope.controllerProperty= 'This is controller specific property';
});

//@ - text bind
// = - two way bind
// & - one way bind