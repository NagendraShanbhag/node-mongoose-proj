


var myapp = angular.module('myapp',['ngResource']);

/*myapp.config(['resourceProvider',function($resourceProvider){

	$resourceProvider.defaults.stripTrailingSlashes =false;
}])*/

myapp.controller('myCtrl',function($scope,Notes){


$scope.name="nagendra";

$scope.note = Notes.query({});
console.log($scope.note); 

var item={
  "_id": "57a655997d2241695585ecf6",
  "__v": 0,
  "name": "Master Routes",
  "completed": false,
  "note": "soon.nagendra..goury",
  "updated_at": "2016-08-07T13:24:20.672Z"
}

$id="57a655997d2241695585ecf9",

//
//Notes.save({}, item);
//Notes.update({ id:$id }, item);
Notes.delete({ id:$id });

 



})


myapp.factory('Notes', ['$resource', function($resource) {
return $resource('http://localhost:4000/todos/:id', {},
     
     {  'get':    {method:'GET'},
  		'save':   {method:'POST'},
 	    'query':  {method:'GET', isArray:true},
 	    'remove': {method:'DELETE'},
 	    'delete': {method:'DELETE'},
 	    'update':{method:"PUT"} }


     );
}]);