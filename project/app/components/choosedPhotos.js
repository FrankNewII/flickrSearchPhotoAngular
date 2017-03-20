(function () {
  angular.module('App')
    .component('choosedPhotos', {
      bindings: {
        choosedPhotos: '='
      },
      templateUrl: '../app/components/templates/choosedPhotos.html'
    });
})();