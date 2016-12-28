(function(){
	'use strict';

	angular.module("myFirstApp",[])
	.controller("MyFirstController",function($scope){
		$scope.name="Rashik"
		$scope.sayHello = function(){
			return "Hello Rashik";
		};
	});

})();