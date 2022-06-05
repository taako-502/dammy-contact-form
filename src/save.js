import { useBlockProps } from '@wordpress/block-editor';

export default function save() {
	const blockProps = useBlockProps.save();
	return (
		<div { ...blockProps } id="dcf" className="dcf">
			<div className="dcf__row">
				<label htmlFor="dcf__text--name">名前</label>
				<input
					type="text"
					id="dcf__text--name"
					className="dcf__text--name"
				></input>
			</div>
			<div className="dcf__row">
				<label htmlFor="dcf__textarea">メールアドレス</label>
				<input
					type="text"
					id="dcf__text--email"
					className="dcf__text--email"
				></input>
			</div>
			<div className="dcf__row">
				<label htmlFor="dcf__textarea">本文</label>
				<textarea
					id="dcf__textarea"
					className="dcf__textarea"
				></textarea>
			</div>
			<div className="dcf__row txt-algn--center">
				<input
					type="button"
					className="dcf__button"
					value="送信"
				></input>
			</div>
		</div>
	);
}
