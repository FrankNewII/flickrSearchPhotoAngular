(function () {
  angular.module('App')
    .component('choosedPhotos', {
      bindings: {
        choosedPhotos: '='
      },
        templateUrl: 'html/templates/choosedPhotos.html'
    });
})();