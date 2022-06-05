import { useBlockProps } from '@wordpress/block-editor';

export default function save() {
	const blockProps = useBlockProps.save();
	return (
		<form
			{ ...blockProps }
			id="dcf"
			className="dcf"
		>
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
					onclick="
						document.getElementById('dcf-message').classList.add('display-block');
						document.getElementById('dcf-message').textContent='送信完了しました';
					"
				></input>
			</div>
			<div id="dcf-message"></div>
		</form>
	);
}
