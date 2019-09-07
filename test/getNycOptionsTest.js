'use strict';

const assert = require('assertthat').default;

const getNycOptions = require('../lib/getNycOptions');

suite('getNycOptions', () => {
  test('is a function.', async () => {
    assert.that(getNycOptions).is.ofType('function');
  });
});
