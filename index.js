const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  //console.log(req)

  // writing the response
   res.setHeader('Content-Type', 'text/html')
  fs.readFile('./views/index.html', (error, data) => {
    if(error) {
      console.log(`error: ${error}`)
      res.end()
    } else {
      res.write(data)
      res.end()
    }
  })
})
server.listen(3000)