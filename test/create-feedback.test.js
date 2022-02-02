const { expect } = require('chai');

const { newFeedback } = require('../src/user-interface');
const { emoji } = require('../src/enums/emoji');
const { tags } = require('../src/enums/tags');
const { expected } = require('./__fixtures__/create-feedback');

describe('Give Feedback', () => {
	it('Returns blocks for the new feedback', (done) => {
		expect(newFeedback({ emoji, tags })).to.deep.equal(
			JSON.stringify(expected)
		);
		done();
	});
});
