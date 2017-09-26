var app= angular.module('mainApp',[]);
app.controller('app',function($scope){
    $scope.tasks=[];
    
    var taskData= localStorage['tasksList'];

    if(taskData !== undefined){
        $scope.tasks=JSON.parse(taskData);
    }

    $scope.searchEnter = function(){
        if(event.which == 13 && $scope.task!=""){
            $scope.addTask();
        }
        return false;
    };

    $scope.addTask=function(){
        $scope.tasks.push({'taskMessage':$scope.task,'status':false});
        console.log($scope.tasks);
        $scope.task='';
        localStorage['tasksList']=JSON.stringify($scope.tasks);
        console.log(localStorage);
    };

    $scope.contentEdit=function(msg){
        var editable=event.target.contentEditable;
        
        for(i=0;i<$scope.tasks.length;i++){
            if($scope.tasks[i].taskMessage== msg){ // checks the location of the task that triggered the edit. This will have old value.
                                                    // It will just get the location and update the array with the latest text in the text box
                                                    // at that point of time.
                $scope.tasks[i].taskMessage=event.target.innerText; 
            }
        }
        console.log($scope.tasks);
        console.log("counting");
        localStorage['tasksList']=JSON.stringify($scope.tasks);
        editable= editable=="false"?"true":"false";
        event.target.contentEditable=editable;
    };

    $scope.enterAgain=function(msg){
        if(event.which == 13 && msg!=''){
            
            $scope.contentEdit(msg);
            console.log("here");
        }
    }
});