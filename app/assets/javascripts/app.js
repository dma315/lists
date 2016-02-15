var App = angular.module('lists', ['ui.router', 'templates'])

App.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('lists', {
        url: '/lists',
        templateUrl: 'views/lists/_list.html',
        controller: 'ListsController',
        resolve: {
          listPromise: ['lists', function(lists) {
            return lists.getAll();
          }]
        }
      })

    $urlRouterProvider.otherwise('lists')
  }
  ])