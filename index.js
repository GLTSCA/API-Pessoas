const express = require('express'); //importando express
const routers = require('./src/routes/pessoa'); // Importando as rotas de pessoa

const app = express();//inicializando express

app.use(express.json()); //habilitando o express para receber json

app.use(routers); // Usando o roteador de pessoa

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
}); //inicializando o servidor na porta 3000