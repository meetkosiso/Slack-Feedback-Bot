const expected = {
	title: { type: 'plain_text', text: 'Something went wrong' },
	callback_id: 'feedback-creation-error-modal',
	blocks: [
		{
			text: {
				type: 'mrkdwn',
				text: "We couldn't post your feedback, feedback. Sorry!",
			},
			type: 'section',
		},
	],
	type: 'modal',
};

module.exports = { expected };
