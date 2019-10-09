var app = require("./app");
var http = require("http");

const port = process.env.BE_PORT;

http.createServer(app).listen(port, function() {
  console.log("Express server listening on port:", port);
});
