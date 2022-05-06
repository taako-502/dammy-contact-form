/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @param {Object} props            Properties passed to the function.
 * @param {Object} props.attributes Available block attributes.
 * @return {WPElement} Element to render.
 */
export default function save( { attributes } ) {
	const blockProps = useBlockProps.save();
	return (
    <div { ...blockProps } className='dcf'>
      <div className='dcf__row'>
        <label for='dcf__text--name'>名前</label>
        <input type='text' id='dcf__text--name' className='dcf__text--name'></input>
      </div>
      <div className='dcf__row'>
        <label for='dcf__textarea'>メールアドレス</label>
        <input type='text' id='dcf__text--email' className='dcf__text--email'></input>
      </div>
      <div className='dcf__row'>
        <label for='dcf__textarea'>本文</label>
        <textarea id='dcf__textarea' className='dcf__textarea'></textarea>
      </div>
      <div className='dcf__row'>
        <input type='button' className='dcf__button' value='送信'></input>
      </div>
    </div>
  );
}
