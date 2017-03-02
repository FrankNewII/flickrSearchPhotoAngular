(function () {
  angular.module('App')
    .component('flickrSearch', {
      bindings: {
        serchedValue: '=',
        timeToUpdate: '@',
        updatePhotos: '&'
      },
      templateUrl: '../app/components/templates/flickrSearch.html',
      controller: flickrSearch
    });

  function flickrSearch() {

    var $ctrl = this;
    $ctrl.search = function (v) {
      $ctrl.updatePhotos({tags: v});
    };
  }
})();