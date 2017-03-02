(function () {
  angular.module('App')
  .component('foundPhoto', {
    bindings: {
      server: "@",
      id: "@",
      secret: "@",
      title: "@",
      isChoosed: '=',
      addImage: "&"
    },
    templateUrl: '../app/components/templates/foundPhoto.html',
    controller: ['$http', '$scope', function ($http, $scope) {

      this.choosePhoto = function () {

        this.isChoosed = !this.isChoosed;

        if(this.isChoosed) {
          $scope.$emit('searchResult:addImage', {
            id:this.id,
            server: this.server,
            title: this.title,
            secret: this.secret
          });
        } else {
          $scope.$emit('searchResult:cutImage', {
            id: this.id
          });
        }
      }

    }]
  });
})();