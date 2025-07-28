const express = require('express'); //importando express
const ControllerPessoa = require('../controllers/pessoa'); // Importando o ControllerPessoa 

const controller = new ControllerPessoa(); // Instanciando a classe ControllerPessoa

const router = express.Router(); // criando um roteador


router.get('/api/v1/nomes', controller.PegarTodos); // Definindo a rota para pegar todos os nomes usando o método PegarTodos do controller

router.get('/api/v1/nome/:id', controller.PegarUm);

router.post('/api/v1/nome', controller.Adicionar); // Definindo a rota para adicionar um nome usando o método Adicionar do controller

router.put('/api/v1/nome/:id', controller.Alterar); // Definindo a rota para alterar um nome usando o método Alterar do controller

router.delete('/api/v1/nome/:id', controller.Deletar); // Definindo a rota para deletar um nome usando o método Deletar do controller

module.exports = router; // Exportando o roteador para ser usado no index.js

