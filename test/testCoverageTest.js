'use strict';

const assert = require('assertthat');

const testCoverage = require('../lib/testCoverage');

suite('testCoverage', () => {
  test('is a function.', async () => {
    assert.that(testCoverage).is.ofType('function');
  });
});
