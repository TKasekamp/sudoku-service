# TypeScript Node Sudoku Service

[![Dependency Status](https://david-dm.org/TKasekamp/sudoku-service.svg)](https://david-dm.org/TKasekamp/sudoku-service) [![Build Status](https://dev.azure.com/toniskasekamp/sudoku-service/_apis/build/status/TKasekamp.sudoku-service?branchName=master)](https://dev.azure.com/toniskasekamp/sudoku-service/_build/latest?definitionId=1&branchName=master)

## Boilerplate
This service has been forked from [https://github.com/microsoft/TypeScript-Node-Starter](microsoft/TypeScript-Node-Starter)

## API documentation
[TSOA](https://github.com/lukeautry/tsoa) auto-generates both routes and `swagger.json` from controllers. This means the code is a single source of truth for documentation.

Using [redoc](https://github.com/Redocly/redoc) to create HTML docs from `swagger.json`. This dependency is installed globally to avoid bloating this project.

To update API docs and routes:
- Run TSOA generator `npm run tsoa:gen`

## License
Copyright (c) Tõnis Kasekamp. All rights reserved.
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the [MIT](LICENSE.txt) License.
