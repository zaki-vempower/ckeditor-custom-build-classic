/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import { ClassicEditor as ClassicEditorBase } from '@ckeditor/ckeditor5-editor-classic';
import { GeneralHtmlSupport } from '@ckeditor/ckeditor5-html-support';

import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { Autoformat } from '@ckeditor/ckeditor5-autoformat';
import { Bold, Italic } from '@ckeditor/ckeditor5-basic-styles';
import { BlockQuote } from '@ckeditor/ckeditor5-block-quote';
import { CKBox } from '@ckeditor/ckeditor5-ckbox';
import { FindAndReplace } from '@ckeditor/ckeditor5-find-and-replace';
import { CKFinder } from '@ckeditor/ckeditor5-ckfinder';
import { Heading } from '@ckeditor/ckeditor5-heading';
import { Indent } from '@ckeditor/ckeditor5-indent';
import { Link } from '@ckeditor/ckeditor5-link';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';

export default class ClassicEditor extends ClassicEditorBase {
	public static override builtinPlugins = [
		Essentials,
		Autoformat,
		Bold,
		Italic,
		BlockQuote,
		CKBox,
		CKFinder,
		FindAndReplace,
		Heading,
		Indent,
		Link,
		GeneralHtmlSupport,
		Paragraph,
	];

	public static override defaultConfig = {
		toolbar: {
			items: [
				'findAndReplace',
				'undo',
				'redo',
				'bold', 'italic',
			]
		},
		// This value must be kept in sync with the language defined in webpack.config.js.
		language: 'en'
	};
}
