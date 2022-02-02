const { newFeedbackModalCallback } = require('./new-feedback-modal');

module.exports.register = (app) => {
	app.view('new-feedback-modal', newFeedbackModalCallback);
};
