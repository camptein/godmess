const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Hello Docker');
})

server.listen(PORT, () => {
    console.log('Running on http://localhost:');
});
