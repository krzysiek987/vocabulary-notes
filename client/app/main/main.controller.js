'use strict';

angular.module('vocabularyNotesApp')
  .controller('MainCtrl', function ($scope, $http, socket) {
    $scope.awesomeThings = [];

    $scope.myInterval = 5000;
    var slides = $scope.slides = [];
    $scope.addSlide = function(number) {
        slides.push({
            image: 'assets/images/' + number + '.png',
            text: ['Welcome','Howdy'][slides.length % 4] + ' ' +
                ['to app', ' maam'][slides.length % 4]
        });
    };
    for (var i=0; i<2; i++) {
        $scope.addSlide(i);
    }

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
      socket.syncUpdates('thing', $scope.awesomeThings);
    });

    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post('/api/things', { name: $scope.newThing });
      $scope.newThing = '';
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('thing');
    });
  });
