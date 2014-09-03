'use strict';

describe('Service: quizService', function () {

  // load the service's module
  beforeEach(module('vocabularyNotesApp'));

  // instantiate service
  var quizService;
  beforeEach(inject(function (_quizService_) {
    quizService = _quizService_;
  }));

  it('should do something', function () {
    expect(!!quizService).toBe(true);
  });

});
