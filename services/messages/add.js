const request = require('request-promise');
const config = require('../../config');

module.exports = (message) => {
    const options = {
        method: 'POST',
        url: `${config.api.baseUrl}messages`,
        headers: {
            Authorization: config.api.key,
        },
        body: {
            message,
        },
        json: true,
    };
    return request(options);
};
