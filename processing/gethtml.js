var request = require('request');

var getHtml = function(url, oEmbedRes, onResult, onError) {
    try {
        var getRequest = request.get(url); // this could throw "Invalid URI"

        getRequest.on('response', function(res){
            var body = '';

            res.on('data', function(chunk){
                body += chunk;
            });

            res.on('end', function() {
                onResult(oEmbedRes, body);
            });
        }).on('error', function(e) {
            onError(oEmbedRes, 500, `exception: ${formatException(e)}`);
        });

    } catch(e) {
       onError(oEmbedRes, 400, `bad request: ${formatException(e)}`);
    };
}

var formatException = function(e) {
    return e.toString().replace(/"/g, '\\"').toLowerCase();
}

module.exports = getHtml;
