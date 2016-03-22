'use strict';

/* App Module */
var blogApp = angular.module('blogApp', [
  'ngRoute',
  'blogControllers'
]);

blogApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/articles', {
        templateUrl: 'partials/article-list.html',
        controller: 'ArticleListController'
      }).
      when('/articles/:articleId', {
        templateUrl: 'partials/article-detail.html',
        controller: 'ArticleDetailController'
      }).
      otherwise({
        redirectTo: '/articles'
      });
  }]);

angular.module('myModule', ['ui.bootstrap']);