const http = require('http');
const fs = require('fs');

// request listener always takes two arguments: req and res
const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>enter message</title></head>');
    res.write(
      '<body><form action="/message" method= "POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
    );
    res.write('</html>');
    return res.end(); // following code will not run
  }

  if (url === '/message' && method === 'POST') {
    const body = [];

    req.on('data', (chunk) => {
      body.push(chunk);
    }); // listen to data event, receive chunk and push it into the body array

    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];
      fs.writeFile('message.txt', message, (err) => {
        // these requests are done only when the file is created
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
      }); // writeFile will block the code until the file is created
    });
  }
  // process.exit() // to hard exit event loop
  // these lines of code will run first before req.on therefor req.on should be returned
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Page</title></head>');
  res.write('<body><h1>Hello from my Node js server</h1></body>');
  res.write('</html>');
  res.end(); // can't write any response after .end()
});

// listens for incoming requests
server.listen(3000, () => console.log('Listening on port 3000'));
