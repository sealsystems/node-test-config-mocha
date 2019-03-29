'use strict';

const assert = require('assertthat');

const getMochaOptions = require('../lib/getMochaOptions');

suite('getMochaOptions', () => {
  test('is a function.', async () => {
    assert.that(getMochaOptions).is.ofType('function');
  });
});
