const http = require('http');

const listaTarefas = [
  'Executar API',
  'Testar rotas',
  'Aprender Docker'
];

const servidor = http.createServer((req, res) => {

  if (req.url === '/') {
    res.write('Teste de rota principal funcionando');
  } 
  else if (req.url === '/tarefas') {
    res.setHeader('Content-Type', 'application/json'); // 👈 novo
    res.write(JSON.stringify(listaTarefas));
  } 
  else {
    res.write('Rota não encontrada');
  }

  res.end();
});

servidor.listen(3000);
