const app = require("./app");
const http = require("http");

const port = '3003';

http.createServer(app).listen(port, function() {
  console.log("Express server listening on port:", port);
});
