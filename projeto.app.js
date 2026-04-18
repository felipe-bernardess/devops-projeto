const http = require('http');

const listaTarefas = [
  'Estudar API',
  'Testar rotas',
  'Aprender Docker'
];

const servidor = http.createServer((req, res) => {

  if (req.url === '/') {
    res.write('Teste de rota principal funcionando');
  } 
  else if (req.url === '/tarefas') {
    res.write(JSON.stringify(listaTarefas));
  } 
  else {
    res.write('Rota não encontrada');
  }

  res.end();
});

servidor.listen(3000);
