const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ status: 'Collaborative Canvas Server Running' }));
});

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
  console.log(`Collaborative Canvas Server active on port ${PORT}`);
});
