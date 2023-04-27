const http = require('http')

let server = http.createServer((req, res) => {
  if (req.url === '/users') {
    res.setHeader('Content-Type', 'text/plain')
    const users = [
      {id: 1, old: 1},
      {id: 2, old: 2},
      {id: 3, old: 3},
      {id: 4, old: 4}
    ]
    res.end(JSON.stringify(users))
  }
})

server.listen(8199, () => {
  console.log('Server loaded')
})