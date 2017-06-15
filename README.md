IP Address
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Validates if a value is an IP address.


## Installation

``` bash
$ npm install validate.io-ip-address
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

To use the module,

``` javascript
var validate = require( 'validate.io-ip-address' );

console.log( validate( '192.168.1.172' ) );
// Returns true

console.log( validate( '10.10.248.244' ) );
// Returns true

console.log( validate( '255.168.92.2' ) );
// Returns true

console.log( validate( '256.168.92.2') );
// Returns false

console.log( validate( '192.168.1.172.1') );
// Returns false
```

This method validates that the `value` to be validated is a `string`. For any other value type, the method returns `false`.


## Examples

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org/) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ open reports/coverage/lcov-report/index.html
```


## License

[MIT license](http://opensource.org/licenses/MIT). 


---
## Copyright

Copyright &copy; 2014. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/validate.io-ip-address.svg
[npm-url]: https://npmjs.org/package/validate.io-ip-address

[travis-image]: http://img.shields.io/travis/validate-io/ip-address/master.svg
[travis-url]: https://travis-ci.org/validate-io/ip-address

[coveralls-image]: https://img.shields.io/coveralls/validate-io/ip-address/master.svg
[coveralls-url]: https://coveralls.io/r/validate-io/ip-address?branch=master

[dependencies-image]: http://img.shields.io/david/validate-io/ip-address.svg
[dependencies-url]: https://david-dm.org/validate-io/ip-address

[dev-dependencies-image]: http://img.shields.io/david/dev/validate-io/ip-address.svg
[dev-dependencies-url]: https://david-dm.org/dev/validate-io/ip-address

[github-issues-image]: http://img.shields.io/github/issues/validate-io/ip-address.svg
[github-issues-url]: https://github.com/validate-io/ip-address/issues
