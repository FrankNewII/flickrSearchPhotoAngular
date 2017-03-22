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
            templateUrl: 'html/templates/foundPhoto.html',
            controller: FoundPhotoController
        });

    FoundPhotoController.$inject = [
        '$scope'
    ];

    function FoundPhotoController($scope) {

        this.choosePhoto = function () {

            this.isChoosed = !this.isChoosed;

            if (this.isChoosed) {
                $scope.$emit('searchResult:addImage', {
                    id: this.id,
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

    }
})();