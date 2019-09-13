'use strict';

const getCommandLineOptions = require('./getCommandLineOptions');

const getMochaOptions = function(additionalOptions = []) {
  const cmdOptions = getCommandLineOptions('-mocha', process.argv);
  return [
    `"test/**/*Test.js"`,
    '--bail',
    '--color',
    '--exit',
    '--recursive',
    '--ui tdd',
    ...cmdOptions,
    ...additionalOptions
  ].join(' ');
};

module.exports = getMochaOptions;
