var validate = require( './../lib' );

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