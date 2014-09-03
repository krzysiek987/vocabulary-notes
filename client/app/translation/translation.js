'use strict';

angular.module('vocabularyNotesApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('translation', {
        url: '/translation',
        templateUrl: 'app/translation/translation.html',
        controller: 'TranslationCtrl'
      });
  });