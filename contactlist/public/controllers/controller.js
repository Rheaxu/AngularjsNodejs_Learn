
/*The use of globals for controller constructors is not allowed in version
	that are later than 1.3.x
	https://github.com/angular/angular.js/commit/3f2232b5a181512fac23775b1df4a6ebda67d018
*/
angular.module('myApp',[]).controller('AppCtrl',['$scope','$http',AppCtrl]);

function AppCtrl($scope,$http){

	$http.get("/contactlist").success(function(response){
		console.log("I got the data I requested");
		$scope.contactlist = response;
	});
}