module.exports = (app) => {
    app.route(['/', '/*']).all((req, res) => {
        res.status(200).send(
            "<h1 style='text-align: center;'>Nothing to see here...</h1><img src='//i.imgur.com/xqUQSAW.gif' style='margin: 0 auto; display: block;'>",
        );
    });
};
