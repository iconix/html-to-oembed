var datauri = require("../processing/datauri.js");

var appRouter = function(app) {
    var oembedRoute = "/oembed";

    app.get(oembedRoute, function(req, res) {
        var url = req.query.url;

        if (!url) {
            return res.status(400).send({ status: 400, message: "bad request: missing url" });
        } else {
            // TODO formalize oEmbed response
            return res.send({
                type: "rich",
                version: "1.0",
                html: "TODO for " + url,
                width: 0,
                height: 0
            });
        }
    });

    app.post(oembedRoute, function(req, res) {
        if (!req.body) {
            return res.status(400).send({ status: 400, message: "bad request: missing request body" });
        } else {
            var html = req.body.html;
            return res.send({
                type: "rich",
                version: "1.0",
                html: "<iframe src='" + datauri(html) + "' />",
                width: 0,
                height: 0
            });
        }
    });
}

module.exports = appRouter;
