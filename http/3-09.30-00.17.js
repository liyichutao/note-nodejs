/**
 * 获取post请求内容
 */


var http = require('http');
var querystring = require('querystring');
var util = require('util');

http.createServer(function(req, res){
    var post = '';

    req.on('data', function(chunk){
        post += chunk;
    });

    req.on('end', function(){
        post = querystring.parse(post);
        console.log(post);
        res.end(util.inspect(post));
    });
}).listen(8888);

console.log("Server started.");
