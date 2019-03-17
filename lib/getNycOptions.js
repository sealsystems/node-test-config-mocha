'use strict';

const getNycOptions = function(additionalOptions = []) {
  return [
    '--clean',
    '--reporter=lcov',
    '--reporter=text-summary',
    '--branches 80',
    '--functions 80',
    '--lines 80',
    '--statements 80',
    ...additionalOptions
  ].join(' ');
};

module.exports = getNycOptions;
