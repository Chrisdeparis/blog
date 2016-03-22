'use strict';

/* Controllers */

var blogControllers = angular.module('blogControllers', []);

blogControllers.controller('ArticleListController', ['$scope', '$http',
  function($scope, $http) {
    $http.get('articles/articles.json').success(function(data) {
      $scope.articles = data;
    });

    $scope.orderProp = 'age';
  }]);

blogControllers.controller('ArticleDetailController', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
    $http.get('articles/' + $routeParams.phoneId + '.json').success(function(data) {
      $scope.article = data;
    });
  }]);
