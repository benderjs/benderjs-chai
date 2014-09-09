/**
 * Copyright (c) 2014, CKSource - Frederico Knabben. All rights reserved.
 * Licensed under the terms of the MIT License (see LICENSE.md).
 */

( function( window ) {
	'use strict';

	// fix for PhantomJS issue
	window.should = null;

	window.should = chai.should();
	window.expect = chai.expect;
	window.assert = chai.assert;
} )( this );
