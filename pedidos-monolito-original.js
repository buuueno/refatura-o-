/*
  Trecho original fornecido no exercício.
  Os "..." foram mantidos porque o material não informa o conteúdo dessas partes.
*/

app.post('/pedidos', (req, res) => {
  // validação misturada com a rota
  if (!clienteId || !itens.length) { ... }

  // verificação de estoque misturada com a rota
  for (const item of itens) {
    if (estoque[item.sku] < item.quantidade) { ... }
  }

  // cálculo de total misturado com a rota
  const total = itens.reduce((s, i) =>
    s + i.precoUnitario * i.quantidade, 0);

  // baixa de estoque misturada com a rota
  for (const item of itens) {
    estoque[item.sku] -= item.quantidade;
  }

  const pedido = {
    id: proximoId++,
    clienteId,
    itens,
    total,
    status: 'confirmado'
  };

  pedidos.push(pedido);

  return res.status(201).json(pedido);
});
