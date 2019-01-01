//Problem:We need a simple way to look at a user's badge count and JavaScript poin from a web browser
//Solution:Use Node.js to preform the profile look ups and server our template via HTTP

//!. Create a web Server
const http = require('http');
const router = require("./router.js");

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((request, response) => {
  // calls home route Function
  router.home(request, response);
  router.user(request, response);
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
