'use strict';

const assert = require('assertthat').default;

const getNycOptions = require('../lib/getNycOptions');

suite('getNycOptions', () => {
  test('is a function.', async () => {
    assert.that(getNycOptions).is.ofType('function');
  });

  test('returns standard parameter list', async () => {
    const result = getNycOptions();

    assert
      .that(result)
      .is.equalTo(
        '--all --clean --include "lib/**/*.js" --include "src/**/*.js" --reporter=lcov --reporter=text-summary --branches 80 --functions 80 --lines 80 --statements 80'
      );
  });

  test('adds additional paramters to list', async () => {
    const result = getNycOptions(['hugo', 'hansi']);

    assert
      .that(result)
      .is.equalTo(
        '--all --clean --include "lib/**/*.js" --include "src/**/*.js" --reporter=lcov --reporter=text-summary --branches 80 --functions 80 --lines 80 --statements 80 hugo hansi'
      );
  });

  test('adds command line paramters to list', async () => {
    const tmp = process.argv;

    process.argv = ['node', 'test-run', '-nyc--meins', '-mocha--deins'];
    const result = getNycOptions();
    process.argv = tmp;

    assert
      .that(result)
      .is.equalTo(
        '--all --clean --include "lib/**/*.js" --include "src/**/*.js" --reporter=lcov --reporter=text-summary --branches 80 --functions 80 --lines 80 --statements 80 --meins'
      );
  });

  test('adds all paramters to list', async () => {
    const tmp = process.argv;

    process.argv = ['node', 'test-run', '-nyc--meins', '-mocha--deins'];
    const result = getNycOptions(['hugo']);
    process.argv = tmp;

    assert
      .that(result)
      .is.equalTo(
        '--all --clean --include "lib/**/*.js" --include "src/**/*.js" --reporter=lcov --reporter=text-summary --branches 80 --functions 80 --lines 80 --statements 80 --meins hugo'
      );
  });
});
