# Exercício 2 — Refatoração para Estilo em Camadas

O projeto refatora o código `pedidos-monolito.js`, que concentrava validação,
verificação de estoque, cálculo do total, baixa de estoque, criação e persistência
do pedido dentro de uma única rota.

## Estrutura

```text
Exercicio_2_Arquitetura_em_Camadas_Node/
├── app.js
├── package.json
├── routes/
│   └── pedidosRoutes.js
├── services/
│   └── pedidoService.js
└── repositories/
    ├── pedidoRepository.js
    └── estoqueRepository.js
```

## Responsabilidade das camadas

- `routes/`: recebe a requisição HTTP e devolve a resposta.
- `services/`: contém as regras de negócio.
- `repositories/`: acessa e altera os dados de pedidos e estoque.

## Como executar

```bash
npm install
npm start
```

A API ficará disponível em:

```text
http://localhost:3000
```

## Exemplo de teste

Envie um `POST` para:

```text
http://localhost:3000/pedidos
```

Corpo JSON:

```json
{
  "clienteId": 1,
  "itens": [
    {
      "sku": "PROD-001",
      "quantidade": 2,
      "precoUnitario": 50
    }
  ]
}
```

Resposta esperada:

```json
{
  "id": 1,
  "clienteId": 1,
  "itens": [
    {
      "sku": "PROD-001",
      "quantidade": 2,
      "precoUnitario": 50
    }
  ],
  "total": 100,
  "status": "confirmado"
}
```

## Comparação usando a tabela ATAM

A refatoração do sistema monolítico single-file para o estilo em camadas melhorou
principalmente a organização e a separação de responsabilidades, pois as rotas
passaram a cuidar somente das requisições HTTP, os services concentram as regras
de negócio e os repositories ficam responsáveis pelo acesso aos dados e ao estoque.
Segundo a tabela comparativa da aula, a escalabilidade passa de baixa no monolítico
para baixa-média em camadas, enquanto a complexidade operacional continua baixa.
Como custo, o projeto passa a possuir mais arquivos e dependências entre módulos,
continua sem deploy independente e a latência passa de muito baixa para baixa.
