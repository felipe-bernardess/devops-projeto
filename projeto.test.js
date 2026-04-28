const { handleRequest, listaTarefas } = require('./projeto.app');

function mockRes() {
  return {
    headers: {},
    body: '',
    setHeader(key, value) { this.headers[key] = value; },
    write(data) { this.body += data; },
    end() {}
  };
}

// Teste 1 - Rota principal retorna mensagem correta
test('Rota / retorna mensagem correta', () => {
  const req = { url: '/' };
  const res = mockRes();
  handleRequest(req, res);
  expect(res.body).toBe('Teste de rota principal funcionando');
});

// Teste 2 - Rota /tarefas retorna JSON
test('Rota /tarefas retorna lista em JSON', () => {
  const req = { url: '/tarefas' };
  const res = mockRes();
  handleRequest(req, res);
  expect(res.body).toBe(JSON.stringify(listaTarefas));
});

// Teste 3 - Rota /tarefas tem header correto
test('Rota /tarefas tem Content-Type application/json', () => {
  const req = { url: '/tarefas' };
  const res = mockRes();
  handleRequest(req, res);
  expect(res.headers['Content-Type']).toBe('application/json');
});

// Teste 4 - Rota desconhecida retorna mensagem de erro
test('Rota desconhecida retorna mensagem de erro', () => {
  const req = { url: '/rota-inexistente' };
  const res = mockRes();
  handleRequest(req, res);
  expect(res.body).toBe('Rota não encontrada');
});

// Teste 5 - Lista de tarefas tem 3 itens
test('listaTarefas contém 3 itens', () => {
  expect(listaTarefas.length).toBe(3);
});
