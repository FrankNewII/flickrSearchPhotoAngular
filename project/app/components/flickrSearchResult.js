(function () {
    angular.module('App')
        .component('flickrSearchResult', {
            bindings: {
                searchedPhotos: '='
            },
            templateUrl: '../app/components/templates/flickrSearchResult.html'
        });
})()