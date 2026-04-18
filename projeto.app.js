const http = require('http');

const servidor = http.createServer((req, res) => {
  res.write('Projeto API rodando');
  res.end();
});

servidor.listen(3000);
