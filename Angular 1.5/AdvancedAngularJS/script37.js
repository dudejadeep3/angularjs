var application =angular.module('mainApp',[]);

application.filter('base',function(){
    //$digest will call all filters
    var something=function(input,base){
        var parsed = parseInt(input,10);
        var based = parseInt(base,10);

        if(isNaN(parsed) || isNaN(based) || based<=1 || based >=37 ) return input;

        return parsed.toString(based);
    }
    return something;
});



application.controller('app',function($scope){

});