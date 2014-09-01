
// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	validate = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'validate.io-ip-address', function tests() {
	'use strict';

	it( 'should export a function', function test() {
		expect( validate ).to.be.a( 'function' );
	});

	it( 'should negatively validate', function test() {
		var values = [
				5,
				[],
				{},
				true,
				null,
				undefined,
				NaN,
				function(){},
				'localhost',
				'example.com',
				'http://example.com',
				'1000.10.10.100',
				'256.192.16.100',
				'192.168.12.92.5'
			];

		for ( var i = 0; i < values.length; i++ ) {
			assert.ok( !validate( values[i] ) );
		}
	});

	it( 'should positively validate', function test() {
		assert.ok( validate( '192.168.1.172' ) );
		assert.ok( validate( '10.10.248.244' ) );
		assert.ok( validate( '255.168.92.2' ) );
	});

});