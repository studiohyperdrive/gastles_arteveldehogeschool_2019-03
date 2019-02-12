const MessagesService = require('../../services/messages');

module.exports = (req, res) => {
    MessagesService
        .add(req.body.message)
        .then(() => {
            res.status(201).json({
                msg: 'Message added',
            });
        })
        .catch((err) => {
            res.status(400).json({
                err,
            });
        });
};
