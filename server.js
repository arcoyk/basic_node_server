'use strict';
var os = require('os');
var nodeStatic = require('node-static');
var https = require('https');
var socketIO = require('socket.io');
var fs = require('fs');
var ssl_server_key = 'server_key.pem';
var ssl_server_crt = 'server_crt.pem';
var options = {
	key: fs.readFileSync(ssl_server_key),
  cert: fs.readFileSync(ssl_server_crt)
};
var fileServer = new(nodeStatic.Server)();
var app = https.createServer(options, function(req, res) {
  fileServer.serve(req, res);
}).listen(8080);

console.log("Started at 8080")
// This instance is unique for a server.
var io = socketIO.listen(app);
