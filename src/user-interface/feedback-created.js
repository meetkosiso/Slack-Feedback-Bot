const { Modal, Blocks } = require('slack-block-builder');

module.exports = () =>
	Modal({ title: 'Feedback submitted', callbackId: 'feedback-created-modal' })
		.blocks(
			Blocks.Section({
				text: `Your feedback has been submitted successfully`,
			})
		)
		.buildToJSON();
