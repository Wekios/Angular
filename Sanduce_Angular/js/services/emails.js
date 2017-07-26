app.factory('emails', ['$http', function($http){
  
  return $http.get('emails.json');
  
}]);