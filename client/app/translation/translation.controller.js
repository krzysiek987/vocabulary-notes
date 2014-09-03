'use strict';

angular.module('vocabularyNotesApp')
  .controller('TranslationCtrl', ["$scope", "$http", "socket", function ($scope, $http, socket) {
    $http.get('/api/translations').success(function(translations) {
        $scope.translations = translations;
        socket.syncUpdates('translation', $scope.translations);
    });

    $scope.addTranslation = function() {
        if(angular.isUndefined($scope.translation)) {
            return;
        }
        $http.post('/api/translations', $scope.translation);
        $scope.translation = {};
    };

    $scope.deleteTranslation = function(translation) {
        $http.delete('/api/translations/' + translation._id);
    };

    $scope.$on('$destroy', function () {
        socket.unsyncUpdates('translation');
    });
  }]);
