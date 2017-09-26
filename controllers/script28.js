var application = angular.module('mainApp',[]);

application.controller('app',function($scope){
    $scope.show='msg1';
    $scope.toggle=function(){
        console.log("inside the click event");
        $scope.show=$scope.show=='msg1'?'msg2':'msg1';
    }
});