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

var Complex128 = require( '@stdlib/complex-float64-ctor' );
var randu = require( '@stdlib/random-base-randu' );
var cfloor = require( './../lib' );

var re;
var im;
var z;
var w;
var i;

for ( i = 0; i < 100; i++ ) {
	re = ( randu()*100.0 ) - 50.0;
	im = ( randu()*100.0 ) - 50.0;
	z = new Complex128( re, im );
	w = cfloor( z );
	console.log( 'floor(%s) = %s', z.toString(), w.toString() );
}
