const { expect } = require('chai');

const { feedbackCreationError } = require('../src/user-interface');
const { expected } = require('./__fixtures__/feedback-creation-error');

describe('Feedback Created Error', () => {
	it('Returns blocks for the feedback creation error modal', (done) => {
		expect(feedbackCreationError('feedback')).to.deep.equal(
			JSON.stringify(expected)
		);
		done();
	});
});
