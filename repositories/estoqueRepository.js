// Camada de repositório:
// simula o acesso aos dados de estoque.
const estoque = {
  'PROD-001': 10,
  'PROD-002': 5,
  'PROD-003': 20
};

function buscarQuantidade(sku) {
  return estoque[sku] || 0;
}

function baixarEstoque(sku, quantidade) {
  estoque[sku] -= quantidade;
}

module.exports = {
  buscarQuantidade,
  baixarEstoque
};


//Repositories: antes estoque e pedidos eram alterados diretamente → agora todo acesso aos dados fica isolado.