const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify({ server: 'Server 3', port: 3002 }));
});

server.listen(3002, () => {
    console.log('Server 3 running on port 3002');
});
