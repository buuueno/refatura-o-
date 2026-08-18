// Camada de repositório:
// simula a persistência dos pedidos.
const pedidos = [];
let proximoId = 1;

function salvar(pedido) {
  const pedidoSalvo = {
    id: proximoId++,
    ...pedido
  };

  pedidos.push(pedidoSalvo);

  return pedidoSalvo;
}

function buscarTodos() {
  return pedidos;
}

function buscarPorId(id) {
  return pedidos.find(pedido => pedido.id === Number(id));
}

module.exports = {
  salvar,
  buscarTodos,
  buscarPorId
};


//Repositories: antes estoque e pedidos eram alterados diretamente → agora todo acesso aos dados fica isolado.