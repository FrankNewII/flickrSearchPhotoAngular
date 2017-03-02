(function () {

angular.module('App').service('FlickrModel', ['$resource', FlickrModel]);

  function FlickrModel($resource) {
  var model = $resource('https://api.flickr.com/services/rest/?method=:method&name=value&api_key=:apiKey&tags=:tags&format=:format&nojsoncallback=1&per_page=:per_page', {
    method: "@method",
    apiKey: "@apiKey",
    format: "@format",
    per_page: "10",
    tags: "@tags"
  }, {
    getList: {
      method: 'GET',
      data: {
        tags: '@tags'
      }
    }
  });

  return model;
}
})();
