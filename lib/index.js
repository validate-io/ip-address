/**
*
*	VALIDATE: ip-address
*
*
*	DESCRIPTION:
*		- Validates if a value is an IP address.
*
*
*	NOTES:
*		[1] 
*
*
*	TODO:
*		[1] 
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2014. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com. 2014.
*
*/

(function() {
	'use strict';

	var format = /^((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){3}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})$/;


	/**
	* FUNCTION: validate( ip )
	*	Validates if a value is an IP address.
	*
	* @param {String} ip - IP address
	* @returns {Boolean} boolean indicating whether a value is an IP address
	*/
	function validate( ip ) {
		if ( typeof ip !== 'string' ) {
			return false;
		}
		return format.test( ip );
	} // end FUNCTION validate()


	// EXPORTS //

	module.exports = validate;

})();