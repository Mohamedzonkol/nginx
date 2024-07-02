const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify({ server: 'Server 2', port: 3001 }));
});

server.listen(3001, () => {
    console.log('Server 2 running on port 3001');
});
