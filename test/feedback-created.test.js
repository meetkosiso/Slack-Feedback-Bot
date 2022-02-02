const { expect } = require('chai');

const { feedbackCreated } = require('../src/user-interface');
const { expected } = require('./__fixtures__/feedback-created');

describe('Feedback Creation', () => {
	it('Returns blocks for the feedback created modal', (done) => {
		expect(feedbackCreated()).to.deep.equal(JSON.stringify(expected));
		done();
	});
});
