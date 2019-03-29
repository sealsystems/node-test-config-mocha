# @sealsystems/test-config-mocha

Test configuration for Mocha at SEAL Systems

## Installation

```bash
npm install --save-dev @sealsystems/test-config-mocha
```

## Quick start

Mocha is installed as a dependency of `@sealsystems/test-config-mocha`. So you can call `mocha` from the root directory of your project:

```shell
$(npm bin)/mocha
```

The package also provides some CLI executables:

- `test-run` runs Mocha

- `test-coverage` collects coverage data via `nyc` (which is also installed as a dependency)

- `test-coverage-check` collects coverage data and fails if threshold (80% for all criteria) has not been reached

- `test-report` collect coverage data and opens the generated HTML page

Please note:

- Our standard assert librady `assertthat` is also a dependency of this package. So you do not need to include it in your project's `package.json`.

- Mocha runs with the following settings:

  ```
  test/**/*Test.js
  --async-only
  --bail
  --color
  --exit
  --recursive
  --ui tdd
  ```

To use these executables, add some scripts to your `package.json`:

```json
...
"scripts": {
  "test": "test-run",
  "test:coverage": "test-coverage",
  "test:coverage:check": "test-coverage-check",
  "test:report": "test-report"
}
...
```

And call them via `npm run`:

```shell
npm run test
npm run test:coverage
npm run test:coverage:check
npm run test:report
```
