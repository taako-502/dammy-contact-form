import { registerBlockType } from '@wordpress/blocks';

import './style.scss';
import './editor.scss';

import Edit from './edit';
import save from './save';

registerBlockType( 'create-block/dammy-contact-form', {
	example: {
		attributes: {
			message: 'Dammy Contact Form',
		},
	},
	edit: Edit,
	save,
} );
