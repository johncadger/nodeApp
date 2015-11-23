/**
 * Created by 1204848 on 23/11/2015.
 */
var http = require('http')
var port = process.env.PORT || 1337;

http.createServer(function(request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.write("a");
    response.end('Hello World\n');
}).listen(port);
