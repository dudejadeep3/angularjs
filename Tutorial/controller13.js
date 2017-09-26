var app=angular.module('mainApp',['ngRoute']);
app.config(function($routeProvider){
    $routeProvider
    .when('/',{
        template: "This is a template",
        templateUrl: 'page13.html'
    })
    .when('/hellouser',{
        templateUrl: 'hello13.html'
    })
    .otherwise({
        redirecTo: '/'
    })
});