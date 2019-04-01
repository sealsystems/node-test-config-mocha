# @sealsystems/mocha

Mocha executable and test configuration for SEAL Systems

## Installation

```bash
npm install --save-dev @sealsystems/mocha
```

## Quick start

Mocha is installed as a dependency of `@sealsystems/mocha`. So you can call `mocha` from the root directory of your project:

```shell
$(npm bin)/mocha
```

The package also provides some CLI executables:

- `test-run` runs Mocha

- `test-coverage` collects coverage data via `nyc` (which is also installed as a dependency)

- `test-coverage-check` collects coverage data and fails if threshold (80% for all criteria) has not been reached

- `test-report` collect coverage data and opens the generated HTML page

Please note:

- Our standard assert library `assertthat` is also a dependency of this package. So you do not need to include it in your project's `package.json`.

- In order to install all dependencies directly in the project's `node_modules` folder, you may need to delete `package-lock.json` before adding this package.
 
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
