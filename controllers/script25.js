var application=angular.module('mainApp',[]);

application.provider('date',function(){
    var greet;
    return {
        setGreeting: function(value){
            greet=value;
        },
        $get:function(){ 
            return {
                showDate: function(){
                    var date=new Date();
                    return date.getHours();
                },
                devshowDate: function(){
                    var date=new Date();
                    return date.getHours();
                }
            }
        }
    }
});
                            
application.config(function(dateProvider){
    console.log(dateProvider.$get.showDate());
    var time= dateProvider.$get.devshowDate();
    if(time>0 && time<12){
        dateProvider.setGreeting("Good Morning");
    }
    else if(time>12 && time< 17){
        dateProvider.setGreeting("Good Day");
    }
    else if(time>17 && time<19){
        dateProvider.setGreeting("Good Evening");
    }
    else{
        dateProvider.setGreeting("Good Night");
    }
});// can only access providers, no directives

application.controller('app',function($scope,date){
    $scope.greetMessage=date.showDate();
});