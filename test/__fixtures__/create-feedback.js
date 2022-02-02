const expected = {
	title: { type: 'plain_text', text: 'Give feedback' },
	submit: { type: 'plain_text', text: 'Create' },
	callback_id: 'new-feedback-modal',
	blocks: [
		{
			label: { type: 'plain_text', text: 'What are you feeling now?' },
			block_id: 'mood',
			element: {
				placeholder: { type: 'plain_text', text: 'What are you feeling now?' },
				action_id: 'mood',
				options: [
					{ text: { type: 'plain_text', text: '😢 sad' }, value: 'sad' },
					{ text: { type: 'plain_text', text: '🙁 frown' }, value: 'frown' },
					{ text: { type: 'plain_text', text: '🙂 smile' }, value: 'smile' },
					{ text: { type: 'plain_text', text: '😀 grin' }, value: 'grin' },
					{
						text: { type: 'plain_text', text: '😐 neutral' },
						value: 'neutral',
					},
					{
						text: { type: 'plain_text', text: '😬 grimace' },
						value: 'grimace',
					},
					{
						text: { type: 'plain_text', text: '😴 sleeping' },
						value: 'sleeping',
					},
					{ text: { type: 'plain_text', text: '😠 angry' }, value: 'angry' },
					{ text: { type: 'plain_text', text: '😆 squint' }, value: 'squint' },
					{
						text: { type: 'plain_text', text: '🤩, starstruck' },
						value: 'starstruck',
					},
					{ text: { type: 'plain_text', text: '🥰 hearts' }, value: 'hearts' },
					{
						text: { type: 'plain_text', text: '🤒 thermometer' },
						value: 'thermometer',
					},
					{
						text: { type: 'plain_text', text: '🤯 mindblown' },
						value: 'mindblown',
					},
					{ text: { type: 'plain_text', text: '😯 hushed' }, value: 'hushed' },
					{
						text: { type: 'plain_text', text: '😌 relieved' },
						value: 'relieved',
					},
				],
				type: 'multi_static_select',
			},
			type: 'input',
		},
		{
			label: { type: 'plain_text', text: 'What inspired that?' },
			block_id: 'tags',
			element: {
				placeholder: { type: 'plain_text', text: 'What inspired that?...' },
				action_id: 'tags',
				options: [
					{
						text: { type: 'plain_text', text: 'Mentorship' },
						value: 'Mentorship',
					},
					{
						text: { type: 'plain_text', text: 'Collaboration' },
						value: 'Collaboration',
					},
					{ text: { type: 'plain_text', text: 'Feedback' }, value: 'Feedback' },
					{
						text: { type: 'plain_text', text: 'Impactful Work' },
						value: 'Impactful Work',
					},
					{
						text: { type: 'plain_text', text: 'Kind Words' },
						value: 'Kind Words',
					},
					{ text: { type: 'plain_text', text: 'Learning' }, value: 'Learning' },
					{ text: { type: 'plain_text', text: 'Other' }, value: 'Other' },
				],
				type: 'multi_static_select',
			},
			type: 'input',
		},
		{
			label: { type: 'plain_text', text: 'Would you like to share more?' },
			block_id: 'feedback',
			element: {
				placeholder: { type: 'plain_text', text: 'Share more?' },
				action_id: 'feedback',
				type: 'plain_text_input',
			},
			type: 'input',
		},
	],
	type: 'modal',
};

module.exports = { expected };
