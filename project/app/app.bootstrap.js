angular.module('App', [
  'ui.bootstrap',
  'ngResource'
]);

angular.element(document).ready(function () {
  angular.bootstrap(this, ['App']);
});