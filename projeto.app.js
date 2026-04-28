const http = require('http');

const listaTarefas = [
  'Executar API',
  'Testar rotas',
  'Aprender Docker'
];

function handleRequest(req, res) {
  if (req.url === '/') {
    res.write('Teste de rota principal funcionando');
  } 
  else if (req.url === '/tarefas') {
    res.setHeader('Content-Type', 'application/json');
    res.write(JSON.stringify(listaTarefas));
  } 
  else {
    res.write('Rota não encontrada');
  }
  res.end();
}

const servidor = http.createServer(handleRequest);

if (require.main === module) {
  servidor.listen(3000);
}

module.exports = { handleRequest, listaTarefas };
