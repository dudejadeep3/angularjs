var application = angular.module('mainApp',[]);

application.directive('myFirstDirective',function(){
    return {
            template: 'Hello World!'
    };
});

application.controller('app',function($scope){

});