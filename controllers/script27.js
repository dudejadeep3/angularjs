var application=angular.module('mainApp',[]);

application.service('fromService',function(){
    this.message="This is from service";
});

application.factory('fromFactory',function(){
    var fact={};
    fact.message='This is from factory';
    return fact;
});

application.provider('fromProvider',function(){
    var m1='This is from Provider';    
       return {
           setAName : function(name){
               m1+= " "+ name; 
           },
            $get:function(){
                return {
                    message: m1
                }
            }
    }
});

application.config(function(fromProviderProvider){
    fromProviderProvider.setAName('Damn');
});

application.controller('app',function($scope,fromService,fromProvider,fromFactory){
    $scope.greetMessage=[fromService.message,fromProvider.message,fromFactory.message];
});