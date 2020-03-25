const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);
/**
 * GET: Buscar
 * POST: Criar
 * PUT: Alterar
 * DELETE: ...
 */

 /**
  * QUERY: parametros nomeados enviados na rota após o simbolo de interrogação geralmente para filtro, paginação através de query <
  * ROUTE: Parametros para identificar recursos acessa através de params <
  * BODY PARAMS: Corpo da requisição,utilizado para criar ou alterar recursos acessa através de body<
  */



app.listen(3333);