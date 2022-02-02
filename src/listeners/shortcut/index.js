const { globalNewFeedbackCallback } = require('./global-new-feedback');
const { messageNewFeedbackCallback } = require('./message-new-feedback');

module.exports.register = (app) => {
	app.shortcut('global_new_feedback', globalNewFeedbackCallback);
	app.shortcut('message_new_feedback', messageNewFeedbackCallback);
};
