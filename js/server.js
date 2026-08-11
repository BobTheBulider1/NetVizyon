const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8080;
const DIR = 'C:\\Users\\User\\.gemini\\antigravity\\scratch\\netvizyon_portfolio';

const mimeTypes = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.json': 'application/json'
};

http.createServer((req, res) => {
  let filePath = path.join(DIR, req.url === '/' ? 'index.html' : req.url.split('?')[0]);
  let ext = path.extname(filePath);
  let contentType = mimeTypes[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(404);
      res.end('Not found');
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
}).listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
