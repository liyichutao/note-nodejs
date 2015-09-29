var http = require("http");
var url = require("url");
var util = require("util");

http.createServer(function(req, res){
    res.writeHead(200,{"Content-Type": "text/plain"});
    console.log(req.method);
    console.log(util.inspect(url.parse(req.url,true)))
    res.write("hello");
    res.end();

}).listen(8887);


console.log("Server started.");
