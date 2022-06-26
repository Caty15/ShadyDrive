const fs = require('fs')
const http = require('http')
const port = 25565

let visits = 0 

const server = http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    fs.readFile('index.html', function(error, data) {
        if (error) {
            res.writeHead(404)
            res.write('file not found - 404')
        } else {
            res.write(data)
            visits = visits + 1
            console.log(`somebody done a visit - ${visits}`)
        }
        res.end()
    }) 
})

server.listen(port, function(error) {
    if (error) {
        console.log('something happend bad', error);
    } else {
        console.log('server work on port ' + port)
    }
})