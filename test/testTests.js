'use strict';

const assert = require('assertthat');

const testFn = require('../lib/test');

suite('test', () => {
  test('is a function.', async () => {
    assert.that(testFn).is.ofType('function');
  });
});
