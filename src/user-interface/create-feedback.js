const { Modal, Blocks, Elements, Bits } = require('slack-block-builder');

module.exports = ({ emoji, tags }) => {
	const textInput = () =>
		Elements.TextInput({
			placeholder: 'Share more?',
			actionId: 'feedback',
		});

	return Modal({
		title: 'Give feedback',
		submit: 'Create',
		callbackId: 'new-feedback-modal',
	})
		.blocks(
			Blocks.Input({
				label: 'What are you feeling now?',
				blockId: 'mood',
			}).element(
				Elements.StaticMultiSelect({ placeholder: 'What are you feeling now?' })
					.actionId('mood')
					.options(
						emoji.map((item) =>
							Bits.Option({ text: item.name, value: item.id })
						)
					)
			),
			Blocks.Input({
				label: 'What inspired that?',
				blockId: 'tags',
			}).element(
				Elements.StaticMultiSelect({ placeholder: 'What inspired that?...' })
					.actionId('tags')
					.options(
						tags.map((item) => Bits.Option({ text: item.name, value: item.id }))
					)
			),
			Blocks.Input({
				label: 'Would you like to share more?',
				blockId: 'feedback',
			}).element(textInput(null))
		)
		.buildToJSON();
};
