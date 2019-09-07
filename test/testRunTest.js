'use strict';

const assert = require('assertthat').default;

const testRun = require('../lib/testRun');

suite('testRun', () => {
  test('is a function.', async () => {
    assert.that(testRun).is.ofType('function');
  });
});
