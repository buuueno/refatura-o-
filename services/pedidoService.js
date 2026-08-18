const estoqueRepository = require('../repositories/estoqueRepository');
const pedidoRepository = require('../repositories/pedidoRepository');

// Camada de serviço:
// concentra as regras de negócio do pedido.
function criarPedido(dados) {
  const { clienteId, itens } = dados;


  if (!clienteId || !itens || itens.length === 0) {
    throw new Error('Cliente e itens são obrigatórios');
  }

  // Verificação de estoque
  for (const item of itens) {
    const quantidadeDisponivel =
      estoqueRepository.buscarQuantidade(item.sku);

    if (quantidadeDisponivel < item.quantidade) {
      throw new Error(`Estoque insuficiente para ${item.sku}`);
    }
  }

  // Cálculo do total
  const total = itens.reduce(
    (soma, item) =>
      soma + item.precoUnitario * item.quantidade,
    0
  );

  // Baixa de estoque
  for (const item of itens) {
    estoqueRepository.baixarEstoque(
      item.sku,
      item.quantidade
    );
  }

  // Persistência do pedido
  return pedidoRepository.salvar(pedido);
}

function obterTodos() {
  return pedidoRepository.buscarTodos();
}

function obterPorId(id) {
  const pedido = pedidoRepository.buscarPorId(id);
  
  if (!pedido) {
    throw new Error('Pedido não encontrado');
  }
  
  return pedido;
}

module.exports = {
  criarPedido
};

//Services: antes a regra estava misturada na rota → agora concentra a lógica do pedido.