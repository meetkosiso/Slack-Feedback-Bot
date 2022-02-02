const {
	feedbackCreated,
	feedbackCreationError,
} = require('../../user-interface');
const { feedbackAPIBaseURL } = require('../../static');
const { post } = require('../../services/api-service');

const newFeedbackModalCallback = async ({ ack, view }) => {
	const providedValues = view.state.values;

	const moods = providedValues.mood.mood.selected_options.map(
		(mood) => mood.value
	);
	const tags = providedValues.tags.tags.selected_options.map((tag) => ({
		name: tag.value,
		active: true,
	}));
	const feedback = providedValues.feedback.feedback.value;
	const source = 'slack';

	const feedbackAPIResponse = await post(`${feedbackAPIBaseURL}/feedback`, {
		moods,
		tags,
		feedback,
		source,
	}).catch((err) => err);

	if (feedbackAPIResponse instanceof Error) {
		await ack({
			response_action: 'update',
			view: feedbackCreationError(feedbackAPIResponse),
		});

		return;
	}

	await ack({
		response_action: 'update',
		view: feedbackCreated(),
	});
};

module.exports = { newFeedbackModalCallback };
