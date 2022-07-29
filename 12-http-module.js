//http module
const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.end('Hello World');
    }
    if(req.url === '/about'){
        res.end(`
            <h1>About Page</h1>
            <p>My name is Brian Vitualla</p>
            <a href="/">Homepage</a>
        `);
    }
})

server.listen(8000);