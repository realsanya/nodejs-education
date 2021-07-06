const http = require('http')

const server = http.createServer((req, res) => {
  console.log(req.url)

  res.write('<h1>Hello from NodeJS</h1>')
  res.end()
})

server.listen(3000, () => {
  console.log('Server is running...')
})