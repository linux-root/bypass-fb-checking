let http = require('http');
const port = 3000;
host = '0.0.0.0'

let server = http.createServer((req, res) =>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
});

server.listen(port, host, () =>{
    console.log('Server running at http://'+ host + ":" + port)
})