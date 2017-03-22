(function () {
    angular.module('App')
        .component('flickrSearchResult', {
            bindings: {
                searchedPhotos: '='
            },
            templateUrl: 'html/templates/flickrSearchResult.html'
        });
})();