'use strict';

/* jshint -W098 */
angular.module('mean.sellerboard').controller('SellerboardController', ['$scope', 'Global', '$location','Sellerboard',
  function($scope, Global, $location,Sellerboard) {
    $scope.global = Global;
    $scope.package = {
      name: 'sellerboard'
    };
    $scope.find = function() {
      Sellerboard.query(function(articles) {
        $scope.sellerboard = articles;
      });
    };

    $scope.create = function(isValid) {
      
      if (isValid) {
        var sellerboard = new Sellerboard({
          product: this.product,
          option: this.option
        });
        sellerboard.$save(function(response) {
          $location.path('sellerboard/articles/' + response._id);
        });

        this.product = '';
        this.option = '';
      } else {
        $scope.submitted = true;
      }
    };

  }
]);
