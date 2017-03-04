var datauri = require('../processing/datauri.js');
var gethtml = require('../processing/gethtml.js');

var appRouter = function(app) {
    var oembedRoute = '/oembed';

    app.get(oembedRoute, function(req, res) {
        var url = req.query.url;

        if (!url) {
            return res.status(400).send({ status: 400, message: 'bad request: missing url' });
        } else {

            return gethtml(url, res, onGetHtml);
        }
    });

    app.post(oembedRoute, function(req, res) {
        if (!req.body) {
            return res.status(400).send({ status: 400, message: 'bad request: missing request body' });
        } else {
            var html = req.body.html;
            return res.send({
                type: 'rich',
                version: '1.0',
                html: '<iframe width="1024" height="768" style="-webkit-transform:scale(0.5);-moz-transform-scale(0.5);" src="' + datauri(html) + '" />',
                width: 0,
                height: 0
            });
        }
    });
}

var onGetHtml = function(res, html) {
    // TODO formalize oEmbed response
    return res.send({
        type: 'rich',
        version: '1.0',
        html: '<iframe width="1024" height="768" style="-webkit-transform:scale(0.5);-moz-transform-scale(0.5);" src="' + datauri(html) + '" />',
        width: 0,
        height: 0
    });
}

module.exports = appRouter;
