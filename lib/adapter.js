/**
 * Copyright (c) 2014, CKSource - Frederico Knabben. All rights reserved.
 * Licensed under the terms of the MIT License (see LICENSE.md).
 */

( function( window, factory ) {
	'use strict';

	// Chai doesn't go global if AMD is available in the page, so we must retrieve it in two different ways.
	if ( typeof define == 'function' && define.amd ) {
		require( [ 'chai' ], factory );
	} else {
		factory( chai );
	}
} )( this, function( chai ) {
	// fix for PhantomJS issue
	window.should = null;

	window.should = chai.should();
	window.expect = chai.expect;
	window.assert = chai.assert;
} );
