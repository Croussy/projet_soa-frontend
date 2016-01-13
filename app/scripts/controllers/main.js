'use strict';

/**
 * @ngdoc function
 * @name projetSoaFrontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the projetSoaFrontendApp
 */
 var module = angular.module('projetSoaFrontendApp');
module.controller('MainCtrl', function ($scope) {
  var mainMarker = {
    lat: 44.85408529,
    lng: -0.56621164,
    focus: true,
    message: "Ingesup"
  };

   angular.extend($scope, {
     bordeaux: {
        lat: 44.85408529,
        lng: -0.56621164,
        zoom: 18
     },
     markers: {
       mainMarker: angular.copy(mainMarker)
     },
     position: {
       lat: 44.85408529,
       lng: -0.56621164
     }
   });
  });
