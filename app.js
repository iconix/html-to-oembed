var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

var routes = require('./routes/routes.js')(app);

const PORT = process.env.PORT || 3000;

var server = app.listen(PORT, function () {
    console.log(`App listening on port ${server.address().port}...`);
});
