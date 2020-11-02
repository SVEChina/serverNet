var http = require('http');
http.createServer(function(req,res){
    res.writeHeader(200,{'Content-Type':'text/plain'});
    res.end('test 1337 node\n');
}).listen(1337,'172.26.118.72');
console.log('Server running at http:172.26.118.72:1337/')