/**
 * Copyright (c) 2014, CKSource - Frederico Knabben. All rights reserved.
 * Licensed under the terms of the MIT License (see LICENSE.md).
 */

'use strict';

var path = require( 'path' );

module.exports = {

	name: 'bender-pagebuilder-chai',

	files: [
		path.join( require.resolve( 'chai' ), '../chai.js' ),
		path.join( __dirname, '/adapter.js' )
	],

	build: function( data ) {
		var head = [ '<head>' ];

		module.exports.files.forEach( function( file ) {
			file = path.join( '/plugins/', file ).replace( /\\/g, '/' );
			head.push( '<script src="' + file + '"></script>' );
		} );

		head.push( '</head>' );

		data.parts.push( head.join( '' ) );

		return data;
	}
};
