'use strict';

const assert = require('assertthat');

const getCmdOptions = require('../lib/getCommandLineOptions');

suite('getCommandLineOptions', () => {
  test('is a function.', async () => {
    assert.that(getCmdOptions).is.ofType('function');
  });

  test('returns options array', async () => {
    const inOptions = ['-a-b', '-b-c', '-a-c'];

    const result = getCmdOptions('-a', inOptions);

    assert.that(result.length).is.equalTo(2);
    assert.that(result).is.equalTo(['-b', '-c']);
  });

  test('returns empty array if nothing found', async () => {
    const inOptions = ['-a-b', '-b-c', '-a-c'];

    const result = getCmdOptions('-c', inOptions);

    assert.that(result.length).is.equalTo(0);
    assert.that(result).is.equalTo([]);
  });

  test('returns empty array if input is empty', async () => {
    const inOptions = [];

    const result = getCmdOptions('-c', inOptions);

    assert.that(result.length).is.equalTo(0);
    assert.that(result).is.equalTo([]);
  });
});
