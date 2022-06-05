import { useBlockProps } from '@wordpress/block-editor';

export default function Edit() {
	const blockProps = useBlockProps( {
		className: 'dcf-editor__text--name',
	} );
	return (
		<div { ...blockProps }>
			<p>ここにダミーのコンタクトフォームを表示します</p>
		</div>
	);
}
