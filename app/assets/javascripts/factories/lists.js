App.factory('lists', [
  '$http',
  function($http) {
    var object = {
      lists: []
    };

    object.getAll = function() {
      $http.get('/lists.json').success(function(lists) {
        angular.copy(lists, object.lists)
      });
    };

    return object
  }
  ])