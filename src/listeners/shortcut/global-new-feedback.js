const { newFeedback } = require('../../user-interface');
const { emoji } = require('../../enums/emoji');
const { tags } = require('../../enums/tags');

const globalNewFeedbackCallback = async ({ shortcut, ack, client }) => {
	try {
		await ack();

		await client.views.open({
			trigger_id: shortcut.trigger_id,
			view: newFeedback({ emoji, tags }),
		});
	} catch (error) {
		// eslint-disable-next-line no-console
		console.error(error);
	}
};

module.exports = { globalNewFeedbackCallback };
