var https = require('https');

var getHtml = function(url, oEmbedRes, onResult) {
    // TODO make sure url is properly formed
    https.get(url, function(res){
        var body = '';

        res.on('data', function(chunk){
            body += chunk;
        });

        res.on('end', function() {
            onResult(oEmbedRes, body);
        });
    }).on('error', function(e){
        console.log('Got an error: ', e);
        onResult(oEmbedRes, '');
    });
}

module.exports = getHtml;
