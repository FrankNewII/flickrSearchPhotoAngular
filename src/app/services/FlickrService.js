(function () {
    angular.module('App')
        .service('flickrService', ['FlickrModel', flickrService]);

    flickrService.$inject = [
        'FlickrModel'
    ];

    function flickrService(FlickrModel) {

        function get(query) {
            return FlickrModel.getList({
                method: "flickr.photos.search",
                apiKey: "b54580f369a7eeebecb2004dc429d08f",
                format: "json",
                per_page: 20,
                tags: query
            });
        }

        return {
            get: get
        }
    }
})();