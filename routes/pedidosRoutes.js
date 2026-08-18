const express = require('express');
const pedidoService = require('../services/pedidoService');

const router = express.Router();

// Camada de rota/controller:
// recebe a requisição HTTP e devolve a resposta.
router.post('/', (req, res) => {
  try {
    const pedido = pedidoService.criarPedido(req.body);
    return res.status(201).json(pedido);
  } catch (erro) {
    return res.status(400).json({
      erro: erro.message
    });
  }
});

// Rota GET para buscar todos os pedidos
router.get('/', (req, res) => {
  try {
    const pedidos = pedidoService.obterTodos();
    return res.status(200).json(pedidos);
  } catch (erro) {
    return res.status(400).json({
      erro: erro.message
    });
  }
});

// Rota GET para buscar um pedido por ID
router.get('/:id', (req, res) => {
  try {
    const pedido = pedidoService.obterPorId(req.params.id);
    return res.status(200).json(pedido);
  } catch (erro) {
    return res.status(404).json({
      erro: erro.message
    });
  }
});

module.exports = router;
 //Routes: antes fazia tudo → agora só controla a requisição.