var appRouter = function(app) {

    app.get("/", function(req, res) {
        var url = req.query.url;

        // TODO accept HTML in the request body as well

        if (!url) {
            return res.status(400).send({ status: 400, message: "bad request: missing url" });
        } else {
            return res.send("request to embed url " + url);
        }
    });
}

module.exports = appRouter;
