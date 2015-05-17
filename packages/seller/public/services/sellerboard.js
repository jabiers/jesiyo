'use strict';

angular.module('mean.sellerboard').factory('Sellerboard', ['$resource',
  function($resource) {
    return $resource('api/sellerboard/articles/:articleId', {
      articleId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  }
]);
