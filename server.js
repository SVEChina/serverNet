var http = require('http');
http.createServer(function(req,res){
    res.writeHeader(200,{'Content-Type':'text/plain'});
    res.end('hello  World\n');
}).listen(1337,'127.0.0.1');
console.log('Server running at http:121.89.196.177:1337/')