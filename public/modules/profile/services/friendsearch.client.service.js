'use strict';

angular.module('profile').factory('Friendsearch', ['$http',
	function($http) {
		// Friendsearch service logic
		// ...
		var search = function(userName){
      return $http({
        method: 'POST',
        data: {userName: userName},
        url: '/users/friends/search'
      })
      .then(function(response){
      	console.log(response);
        return response.data;
      },
      function(err){
        console.log(err);
      });
    };

    var add = function(userName){
    return $http({
        method: 'POST',
        data: {userName: userName},
        url: '/users/friends/add'
      })
      .then(function(response){
      	console.log(response);
        return response.data;
      },
      function(err){
        console.log(err);
      });
    };

    var retrieveFriends = function(userName){
    return $http({
        method: 'GET',
        url: '/users/friends/'
      })
      .then(function(response){
      	console.log('friends list:' + response);
      	console.log('friends list data:' + response.data);
        return response.data;
      },
      function(err){
        console.log(err);
      });
    };

    var getUser = function(userName){
    return $http({
        method: 'GET',
        url: '/users/'+userName
      })
      .then(function(response){
      	console.log('returned user object' + response);
      	console.log('returned user data' + response.data);
        return response.data;
      },
      function(err){
        console.log(err);
      });
    };

		// Public API
		return {
			search: search,
			add: add,
			retrieveFriends: retrieveFriends,
			getUser: getUser
			
		};
	}
]);