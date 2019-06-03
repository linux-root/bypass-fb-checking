var {getCountryCode} = require('./ipgeo')

let http = require('http');
const port = 3000;
host = '0.0.0.0'


let server = http.createServer((req, res) =>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    let ip = req.connection.remoteAddress
    getCountryCode(ip, (data)=> {
       if(data.country_code2 === 'VN'){
           res.end('welcome VN');
       }else{
           res.end('fb checking');
       }
    })
});


server.listen(port, host, () =>{
    console.log('Server running at http://'+ host + ":" + port)
})