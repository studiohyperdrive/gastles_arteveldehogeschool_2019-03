module.exports = (req, res, next) => {
    if (!req.body.message) {
        return res.status(400).json({
            err: 'Please provide a message',
        });
    }

    return next();
};
