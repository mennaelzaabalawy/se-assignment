var http = require('http');
var fs = require('fs');

var handleRequest = function handleRequest(request, response){
    if (request.url==='/index.html') {
        response.writeHeader(200, {'Content-type':'text/html'});
        response.end(fs.readFileSync('/public/index.html'));
    } else {
        response.writeHeader(404, {'Content-type':'text/html'});
        response.end(fs.readFileSync('/public/404.html'));
    }
};
var server = http.createServer(handleRequest);

var PORT = 3000; 
server.listen(PORT, function(){
    console.log("Server listening on: http://localhost:%s", PORT);
});




