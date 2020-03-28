const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);


/** Método HTTP:
 * 
 * GET: busca uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Altera uma informação no back-end
 * DELETE: Deleta uma informação no back-end
 */

/**
 * Query Params: parâmetros nomeados, enviados na rota após o ?. (Filtros, paginação)
 * Route Params: parâmetros utilizados para IDENTIFICAR recursos.
 * Request Body: corpo da requisição utilizado para criar ou alterar recursos.
 */


