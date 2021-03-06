/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var floor = require( '@stdlib/math-base-special-floor' );


// MAIN //

/**
* Rounds a complex number toward negative infinity.
*
* @private
* @param {(Array|TypedArray|Object)} out - output array
* @param {number} re - real component
* @param {number} im - imaginary component
* @returns {(Array|TypedArray|Object)} rounded components
*
* @example
* var out = new Array( 2 );
* var v = cfloor( out, -4.2, 5.5 );
* // returns [ -5.0, 5.0 ]
*
* @example
* var out = new Array( 2 );
* var v = cfloor( out, 9.99999, 0.1 );
* // returns [ 9.0, 0.0 ]
*
* @example
* var out = new Array( 2 );
* var v = cfloor( out, 0.0, 0.0 );
* // returns [ 0.0, 0.0 ]
*
* @example
* var out = new Array( 2 );
* var v = cfloor( out, NaN, NaN );
* // returns [ NaN, NaN ]
*/
function cfloor( out, re, im ) {
	out[ 0 ] = floor( re );
	out[ 1 ] = floor( im );
	return out;
}


// EXPORTS //

module.exports = cfloor;
