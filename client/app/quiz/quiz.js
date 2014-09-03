'use strict';

angular.module('vocabularyNotesApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('quiz', {
        url: '/quiz',
        templateUrl: 'app/quiz/quiz.html',
        controller: 'QuizCtrl'
      });
  });