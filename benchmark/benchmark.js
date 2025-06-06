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

var bench = require( '@stdlib/bench-harness' );
var randu = require( '@stdlib/random-array-uniform' );
var isnan = require( '@stdlib/math-base-assert-is-nan' );
var Complex128 = require( '@stdlib/complex-float64-ctor' );
var real = require( '@stdlib/complex-float64-real' );
var imag = require( '@stdlib/complex-float64-imag' );
var uniform = require( '@stdlib/random-base-uniform' );
var isArray = require( '@stdlib/assert-is-array' );
var floor = require( '@stdlib/math-base-special-floor' );
var pkg = require( './../package.json' ).name;
var cfloor = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var values;
	var y;
	var i;

	values = [
		new Complex128( uniform( -500.0, 500.0 ), uniform( -500.0, 500.0 ) ),
		new Complex128( uniform( -500.0, 500.0 ), uniform( -500.0, 500.0 ) )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = cfloor( ( values[ i%values.length ] ) );
		if ( isnan( real( y ) ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( imag( y ) ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::manual', function benchmark( b ) {
	var re;
	var im;
	var y;
	var i;

	re = randu( 10, -500.0, 500.0 );
	im = randu( 10, -500.0, 500.0 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = [ floor( re[ i%re.length ] ), floor( im[ i%im.length ] ) ];
		if ( y.length === 0 ) {
			b.fail( 'should not be empty' );
		}
	}
	b.toc();
	if ( !isArray( y ) ) {
		b.fail( 'should return an array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
