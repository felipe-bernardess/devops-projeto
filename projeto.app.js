const http = require('http');

const servidor = http.createServer((req, res) => {

  if (req.url === '/') {
    res.write('Teste de rota principal funcionando');
  } else {
    res.write('Rota não encontrada');
  }

  res.end();
});

servidor.listen(3000);
