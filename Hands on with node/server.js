var http = require ('http');

var server = http.createServer(function(req,res){
    res.writeHead(200,{"content-type":"text/html"})
    res.write("Hello");
    res.end();
}).listen(3000);
console.log("Server Starts");