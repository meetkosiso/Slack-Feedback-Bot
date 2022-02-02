const { Modal, Blocks } = require('slack-block-builder');

module.exports = (feedback) =>
	Modal({
		title: 'Something went wrong',
		callbackId: 'feedback-creation-error-modal',
	})
		.blocks(
			Blocks.Section({
				text: `We couldn't post your feedback, ${feedback}. Sorry!`,
			})
		)
		.buildToJSON();
