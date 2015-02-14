/*This is completely reusable
*/
angular.module("nameinfo",[]).directive('nameinfo',function(){
	return {
		scope:{},
		restrict:'A',	//Element
		link:function(scope,e,a){
			scope.fullName = a.first+' '+a.last
		},
		replace:true,	//replace in dynamic data the entire tag with our template (i.e. name) instead of using the <h1 class="ng-binding"></h1>
		template:"<h1>{{fullName}}</h1>"
	}
});

angular.module("namer",[]).directive('namer',function(){
	return {
		scope:{},
		restrict:'C',	//Attribute
		link:function(scope,e,a){
			scope.fullName = a.first+' '+a.last
			scope.first = a.first;
			scope.last = a.last;
		},
		template:"{{last}},{{first}}"
	}
});