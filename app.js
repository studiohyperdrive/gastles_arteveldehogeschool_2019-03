const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const config = require('./config');

// Load body parser for parsing JSON in requests
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(bodyParser.json({ limit: '50mb', keepExtensions: true }));

// Load messages route here
// Tip: see DefaultRoute example :-)
const MessagesRoute = require('./routes/messages');

MessagesRoute(app);

// This is the default route if no route was found
const DefaultRoute = require('./routes/default');

DefaultRoute(app);

app.listen(config.port, () => {
    // eslint-disable-next-line no-console
    console.log(`Server ready and running on ${config.port}.`);
});
