const http = require('http');
const routes = require('./routes');

// request listener always takes two arguments: req and res
const server = http.createServer(routes.handler);

// listens for incoming requests
server.listen(3000, () => console.log('Listening on port 3000'));
