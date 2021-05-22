// 1 spin up a node.js driven server on port 3000
// 2 handle two routes '/' and '/users'

const http = require('http');

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === '/') {
    res.setHeader('Content-type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Assignment</title></head>');
    res.write('<body>');
    res.write('<h1>Welcome to Node.js Assignment</h1>');
    res.write(
      '<form action="/create-user" method= "POST"><input type="text" name="username"><button type="submit">Send</button></form>'
    );
    res.write('</body>');
    res.write('</html>');
    return res.end(); // return is required if there are res code outside of if statement
  }

  if (url === '/users') {
    res.setHeader('Content-type', 'text/html ');
    res.write('<html>');
    res.write('<head><title>Assignment</title></head>');
    res.write('<body><ul><li>User One</li><li>User Two</li></ul></body>');
    res.write('</html>');

    return res.end();
  }

  if (url === '/create-user' && method === 'POST') {
    const body = [];

    req.on('data', (chunk) => {
      body.push(chunk);
    });

    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const username = parsedBody.split('=')[1];
      console.log(username);
    });
    res.statusCode = 302;
    res.setHeader('Location', '/');
    return res.end();
  }
});

server.listen(3000, () => console.log('Server listening on port 3000'));
