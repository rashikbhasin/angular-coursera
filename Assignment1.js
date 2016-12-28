(function () {
'use strict';

angular.module('Assignment1', [])
.controller('appController', appController);

function appController ($scope) {
  $scope.food = "";
  $scope.message = "";
  $scope.myColor = "white"
  $scope.check =function(){
  	var arr = $scope.food.split(',')
  	var x=0
  	var i=0;
  	for(i=0;i<arr.length;i++){
  		if(arr[i]!=""){
  			x+=1;
  		}
  	}
  	if(x==0){
  		$scope.message = "Please enter data first"
  		$scope.myColor = "red"
  	}
  	else if(x<=3){
  		$scope.message = "Enjoy!"
  		$scope.myColor = "green"
  	}
  	else{
  		$scope.message = "Too much!"
  		$scope.myColor = "green"
  	}
  }
}
})();