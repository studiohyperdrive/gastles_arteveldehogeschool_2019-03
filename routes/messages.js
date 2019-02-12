const { validate } = require('../middleware');
const MessagesController = require('../controllers/messages');

module.exports = (app) => {
    app.route('/message').post(
        validate,
        MessagesController.add,
    );
};
