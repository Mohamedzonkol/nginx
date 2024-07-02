const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify({ server: 'Server 1', port: 3003 }));
});

server.listen(3003, () => {
    console.log('Server 1 running on port 3003');
});
