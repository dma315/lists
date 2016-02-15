App.controller('ListsController', [
  'lists',
  '$scope',
  function(lists, $scope) {
    $scope.lists = lists.lists;
  }
  ])