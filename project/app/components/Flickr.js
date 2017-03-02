(function () {
  angular.module('App')
    .component('flickrGallery', {
      bindings: {},
      controller: ['flickrService', '$scope', LoginController],
      templateUrl: '../app/components/templates/flickrGallery.html'
    });

  function LoginController(flickrService, $scope) {
    var $ctrl = this;
    var choosedImages = {};

    $scope.$on('searchResult:addImage', addImage);
    $scope.$on('searchResult:cutImage', removeImage);

    $ctrl.updatePhotos = function (tags) {
      flickrService.get(tags.tags).$promise.then(function (d) {
        $ctrl.photos = d.photos;
      });
    }


    function addImage(e, params) {
      choosedImages[params.id] = params;
    }

    function removeImage(e, params) {
      delete choosedImages[params.id];
    }

    $ctrl.choosedImages = choosedImages;
  }
})();