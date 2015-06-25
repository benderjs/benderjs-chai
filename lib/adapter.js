/**
 * Copyright (c) 2014-2015, CKSource - Frederico Knabben. All rights reserved.
 * Licensed under the terms of the MIT License (see LICENSE.md).
 */
/* global define */

( function( window, bender ) {
	'use strict';

	var unlock = bender.defer();

	function factory( chai ) {
		// fix for PhantomJS issue
		window.should = null;

		window.should = chai.should();
		window.expect = chai.expect;
		window.assert = chai.assert;

		unlock();
	}

	// Chai doesn't go global if AMD is available in the page,
	// so we must retrieve it in two different ways.
	if ( typeof define == 'function' && define.amd ) {
		require( [ 'chai' ], factory );
	} else {
		factory( window.chai );
	}
} )( this, bender );
