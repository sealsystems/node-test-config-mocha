'use strict';

const assert = require('assertthat');

const testReport = require('../lib/testReport');

suite('testReport', () => {
  test('is a function.', async () => {
    assert.that(testReport).is.ofType('function');
  });
});
