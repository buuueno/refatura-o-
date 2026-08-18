const express = require('express');
const pedidosRoutes = require('./routes/pedidosRoutes');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/pedidos', pedidosRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
