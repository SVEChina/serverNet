var http = require('http');
http.createServer(function(req,res){
    res.writeHeader(200,{'Content-Type':'text/plain'});
    res.end('test 1337 node\n');
}).listen(1337);
console.log('Server running at 1337/')