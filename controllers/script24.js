var application=angular.module('mainApp',[]);

application.factory('random',function(){
    var randomObject={};
    var num=Math.floor(Math.random()*10);
    randomObject.generate=function(){
        return num;
    }
    return randomObject;
});

application.controller('app',function($scope,random){
    $scope.generateRandom= function(){
        $scope.randomNumber = random.generate();
    };
});