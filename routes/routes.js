var datauri = require('../processing/datauri.js');
var gethtml = require('../processing/gethtml.js');

var appRouter = function(app) {
    var oembedRoute = '/oembed';

    app.get(oembedRoute, function(req, res) {
        var url = req.query.url;

        if (!url) {
            return getErrResponse(res, 400, 'bad request: missing url');
        } else {
            return gethtml(url, res, onGetHtml, onGetError);
        }
    });

    app.post(oembedRoute, function(req, res) {
        if (!req.body) {
            return getErrResponse(res, 400, 'bad request: missing request body');
        } else {
            return getOEmbedResponse(res, datauri(req.body.html));
        }
    });
}

var onGetHtml = function(res, html) {
    return getOEmbedResponse(res, datauri(html));
}

var onGetError = function(res, statusCode, message) {
    return getErrResponse(res, statusCode, message);
}

var getOEmbedResponse = function(res, html) {
    // TODO: formalize oEmbed response according to http://oembed.com/
    return res.send({
        type: 'rich',
        version: '1.0',
        // iframe scale trick: http://stackoverflow.com/a/11382661
        html: `<iframe width=\"100%\" height=\"100%\" style=\"-webkit-transform:scale(0.5);-moz-transform-scale(0.5);\" src=\"${html}\" />`,
        width: 1024, // TODO:
        height: 768 // TODO:
    });
}

var getErrResponse = function(res, statusCode, message) {
    return res.status(statusCode).send({ status: statusCode, message: message });
}

module.exports = appRouter;
