const http = require('http');

const server = http.createServer((req, res) => {
  res.send('Hello, world!')

  res.end()
})
 server.listen(3000)