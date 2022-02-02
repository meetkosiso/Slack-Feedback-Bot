const axios = require('axios');

const origin = 'http://localhost:8080';

async function post(endpoint, data) {
	const response = await axios
		.post(endpoint, data, {
			headers: {
				origin,
			},
		})
		.catch((err) => err);

	return response;
}

module.exports = { post };
