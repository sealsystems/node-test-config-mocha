'use strict';

const getMochaOptions = function(additionalOptions = []) {
  return [
    'test/**/*Test.js',
    '--async-only',
    '--bail',
    '--color',
    '--exit',
    '--recursive',
    '--ui tdd',
    ...additionalOptions
  ].join(' ');
};

module.exports = getMochaOptions;
