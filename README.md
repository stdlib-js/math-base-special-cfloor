<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Floor

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Round a complex number toward negative infinity.

<section class="installation">

## Installation

```bash
npm install @stdlib/math-base-special-cfloor
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

</section>

<section class="usage">

## Usage

```javascript
var cfloor = require( '@stdlib/math-base-special-cfloor' );
```

#### cfloor( \[out,] re, im )

Rounds a `complex` number comprised of a **real** component `re` and an **imaginary** component `im` toward negative infinity.

```javascript
var v = cfloor( -4.2, 5.5 );
// returns [ -5.0, 5.0 ]

v = cfloor( 9.99999, 0.1 );
// returns [ 9.0, 0.0 ]

v = cfloor( 0.0, 0.0 );
// returns [ 0.0, 0.0 ]

v = cfloor( NaN, NaN );
// returns [ NaN, NaN ]
```

By default, the function returns real and imaginary components as a two-element `array`. To avoid unnecessary memory allocation, the function supports providing an output (destination) object.

```javascript
var Float32Array = require( '@stdlib/array-float32' );

var out = new Float32Array( 2 );

var v = cfloor( out, -4.2, 5.5 );
// returns <Float32Array>[ -5.0, 5.0 ]

var bool = ( v === out );
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var Complex128 = require( '@stdlib/complex-float64' );
var randu = require( '@stdlib/random-base-randu' );
var real = require( '@stdlib/complex-real' );
var imag = require( '@stdlib/complex-imag' );
var cfloor = require( '@stdlib/math-base-special-cfloor' );

var re;
var im;
var z;
var o;
var w;
var i;

for ( i = 0; i < 100; i++ ) {
    re = ( randu()*100.0 ) - 50.0;
    im = ( randu()*100.0 ) - 50.0;
    z = new Complex128( re, im );
    o = cfloor( real(z), imag(z) );
    w = new Complex128( o[ 0 ], o[ 1 ] );
    console.log( 'floor(%s) = %s', z.toString(), w.toString() );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math/base/special/cceil`][@stdlib/math/base/special/cceil]</span><span class="delimiter">: </span><span class="description">round a complex number toward positive infinity.</span>
-   <span class="package-name">[`@stdlib/math/base/special/cfloorn`][@stdlib/math/base/special/cfloorn]</span><span class="delimiter">: </span><span class="description">round a complex number to the nearest multiple of 10^n toward negative infinity.</span>
-   <span class="package-name">[`@stdlib/math/base/special/cround`][@stdlib/math/base/special/cround]</span><span class="delimiter">: </span><span class="description">round a complex number to the nearest integer.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-cfloor.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-cfloor

[test-image]: https://github.com/stdlib-js/math-base-special-cfloor/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/math-base-special-cfloor/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-cfloor/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-cfloor?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-cfloor.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-cfloor/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-cfloor/tree/deno
[umd-url]: https://github.com/stdlib-js/math-base-special-cfloor/tree/umd
[esm-url]: https://github.com/stdlib-js/math-base-special-cfloor/tree/esm
[branches-url]: https://github.com/stdlib-js/math-base-special-cfloor/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-cfloor/main/LICENSE

<!-- <related-links> -->

[@stdlib/math/base/special/cceil]: https://github.com/stdlib-js/math-base-special-cceil

[@stdlib/math/base/special/cfloorn]: https://github.com/stdlib-js/math-base-special-cfloorn

[@stdlib/math/base/special/cround]: https://github.com/stdlib-js/math-base-special-cround

<!-- </related-links> -->

</section>

<!-- /.links -->
