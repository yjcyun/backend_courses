# Node Basics

## How the Web Works

- user/client(browser) enters a website -> looks up domain -> request to server -> Node.JS Code -> database
- server sends back response to the user/client
- request/response protocol is defined by rules HTTP/HTTPS: Hyper Text Transfer Protocol (Secure)

## Core modules

- http
- https
- fs
- path
- os

## Node.js program lifecyle

- Node code is managed by event loop which keeps on running as long as there are event listeners registered
- this is essential because Node is single threaded and event loop prevents lines of code from blocking the program
- to exit the event loop, run `process.exit`

## Streams & Buffers

#### example. incoming request

- stream -> request body part 1 -> request body part 2 -> ... -> fully parsed
- chunk: chunks the data into multiple parts and node executes data listener until it's done getting all the data

```
  const body = [];
  req.on('data', (chunk) => {
    body.push(chunk);
  }); // listen to data event, receive chunk and push it into the body array

  req.on('end', () => {
    const parsedBody = Buffer.concat(body).toString();
    const message = parsedBody.split('=')[1];
    fs.writeFileSync('message.txt', message);
  });
```

- The body array is a complete data stream which contains multiple chunks of data. After the whole collection of data chunks is stored in data array, the Buffer accepts these chunks one by one and converts them to string and append them to the parsedBody constant.
- `writeFileSync` is a synchronous function. Avoid using it. Instead of use `writeFile`

## Single thread, event loop & blocking code

Node is only using single thread. How is it able to handle multiple incoming requests? Each request requires a thread.
Second request would have to wait until the first request is done. Event loop is responsible for handling event callbacks (fast finishing code). "fs" or any request that takes longer is sent to the worker pool which does the heavy lifting. Worker pool is detached from the code. Worker pool triggers callback and enters the event loop.

### The Event Loop

1. Timers: execute `setTimeout`, `setInterval` callbacks
2. Pending callbacks: execute I/O-related (blocking operations) callbacks that were deferred
3. Poll: retrieve new I/O events, execute their callbacks

- or jump to timer execution(1)
- or defer execution(2)

4. check: execute `setImmediate()` callback
5. close callbacks: execute all 'close' event callbacks
6. process.exit only there are no more event listeners (ref==0)

- when listening to server ref can never be 0 (ref==1)
