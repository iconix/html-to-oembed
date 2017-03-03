var appRouter = function(app) {
    var rootRoute = "/";

    app.get(rootRoute, function(req, res) {
        var url = req.query.url;

        if (!url) {
            return res.status(400).send({ status: 400, message: "bad request: missing url" });
        } else {
            return res.send("request to embed url " + url);
        }
    });

    app.post(rootRoute, function(req, res) {
        if (!req.body) {
            return res.status(400).send({ status: 400, message: "bad request: missing request body" });
        } else {
            var html = req.body.html;
            return res.send("request to embed html " + html);
        }
    });
}

module.exports = appRouter;
