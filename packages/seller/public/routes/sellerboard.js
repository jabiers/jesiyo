'use strict';

angular.module('mean.sellerboard').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider
      .state('sellerboard', {
        url: '/sellerboard',
        templateUrl: 'sellerboard/views/index.html'
      })
      .state('sellerboard create', {
        url: '/sellerboard/create',
        templateUrl: 'sellerboard/views/create.html'
      });
  }
]);
