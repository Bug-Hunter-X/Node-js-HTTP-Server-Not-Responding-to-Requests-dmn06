const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200, {'Content-Type': 'text/plain'}); //Fixed: Add content type
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);

const port = 8080;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});