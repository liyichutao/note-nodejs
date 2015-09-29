/**
 *
 * Created by yerxun on 15/9/29.
 * 发送POST请求
 */
    


var querystring = require('querystring');
var url = require('url');
var http = require('http');
var https = require('https');
var util = require('util');

//POST URL
var urlstr = 'http://127.0.0.1/chu/tao.mm';
//POST 内容
var bodyQueryStr = {
    name: 'mgen',
    id: 2345,
    str: 'hahahahahhaa'
};

var contentStr = querystring.stringify(bodyQueryStr);
var contentLen = Buffer.byteLength(contentStr, 'utf8');
console.log(util.format('post data: %s, with length: %d', contentStr, contentLen));
var httpModule = urlstr.indexOf('https') === 0 ? https : http;
var urlData = url.parse(urlstr);

//HTTP请求选项
var opt = {
    hostname: urlData.hostname,
    port: '8888',
    path: urlData.path,
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': contentLen
    }
};

//处理事件回调
var req = httpModule.request(opt, function(httpRes) {
    var buffers = [];
    httpRes.on('data', function(chunk) {
        buffers.push(chunk);
    });

    httpRes.on('end', function(chunk) {
        var wholeData = Buffer.concat(buffers);
        var dataStr = wholeData.toString('utf8');
        console.log('content ' + wholeData);
    });
}).on('error', function(err) {
    console.log('error ' + err);
});;

//写入数据，完成发送
req.write(contentStr);
req.end();

