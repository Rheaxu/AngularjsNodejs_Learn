
/*The use of globals for controller constructors is not allowed in version
	that are later than 1.3.x
	https://github.com/angular/angular.js/commit/3f2232b5a181512fac23775b1df4a6ebda67d018
*/
angular.module('myApp',[]).controller('AppCtrl',['$scope','$http',AppCtrl]);

function AppCtrl($scope,$http){

	var refresh = function(){
		$http.get("/contactlist").success(function(response){
			console.log("I got the data I requested");
			$scope.contactlist = response;
			$scope.contact = "";
		});
	};

	refresh();	//get the data right when we load the page
	$scope.addContact = function(){
		console.log($scope.contact);
		$http.post("/contactlist",$scope.contact).success(function(response){
			console.log(response);
			refresh();
		});
	};

	$scope.remove = function(id){
		console.log(id);
		$http.delete("/contactlist/"+id).success(function(reponse){
			refresh();
		});

	};

	$scope.edit = function(id){
		console.log(id);
		$http.get("/contactlist/"+id).success(function(response){
			$scope.contact=response;
		});
	};

	$scope.update = function(){
		console.log($scope.contact._id);
		$http.put("/contactlist/"+$scope.contact._id,$scope.contact).success(function(response){
			refresh();
		});
	}

	$scope.deselect = function(){
		$scope.contact = "";
	}
}