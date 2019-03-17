'use strict';

const getMochaOptions = function(additionalOptions = []) {
  return ['--bail', '--color', '--recursive', '--ui tdd', ...additionalOptions].join(' ');
};

module.exports = getMochaOptions;
