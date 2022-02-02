const expected = {
	title: { type: 'plain_text', text: 'Feedback submitted' },
	callback_id: 'feedback-created-modal',
	blocks: [
		{
			text: {
				type: 'mrkdwn',
				text: 'Your feedback has been submitted successfully',
			},
			type: 'section',
		},
	],
	type: 'modal',
};

module.exports = { expected };
