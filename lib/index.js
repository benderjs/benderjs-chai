/**
 * Copyright (c) 2014, CKSource - Frederico Knabben. All rights reserved.
 * Licensed under the terms of the MIT License (see LICENSE.md).
 */

'use strict';

var path = require( 'path' ),
	files = [
		path.join( require.resolve( 'chai' ), '../chai.js' ),
		path.join( __dirname, '/adapter.js' )
	];

module.exports = {
	name: 'bender-chai',
	files: files,
	include: files
};
