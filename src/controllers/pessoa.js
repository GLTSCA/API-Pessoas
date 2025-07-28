const ServicePessoa = require("../services/pessoa");

const service = new ServicePessoa();



class ControllerPessoa{
    PegarTodos(req, res) { // Método para pegar todos os nomes
        const nomes = service.PegarTodos(); // Chama o serviço para pegar todos os nomes
        try {
         res.status(200).json({ nomes }); // Retorna os nomes com status 200
        } catch (error) {
            res.status(500).json({ error: error.message }); // Retorna erro 500 se algo der errado
        }
    }



    PegarUm(req, res) { // Método para pegar um nome
        const  id  = req.params.id; // Pega o id da URL
        const nome = service.PegarUm(id); // Chama o serviço para pegar um nome
        try {
         res.status(200).json({ nome }); // Retorna o nome com status 200
        } catch (error) {
            res.status(500).json({ error: error.message }); // Retorna erro 500 se algo der errado
        }
    }


    Adicionar(req, res) { // Método para adicionar um nome
        const nome = req.body.nome; // Pega o nome do corpo da requisição
        service.Adicionar(nome); // Chama o serviço para adicionar um nome
        try {
         res.status(201).json({ mensagem: nome + " adicionado com sucesso" }); // Retorna o nome com status 201
        } catch (error) {
            res.status(500).json({ error: error.message }); // Retorna erro 500 se algo der errado
        }
    }



    Alterar(req, res) { // Método para alterar um nome
        const id = req.params.id; // Pega o id da URL
        const nome = req.body.nome; // Pega o nome do corpo da requisição
        service.Alterar(id, nome); // Chama o serviço para alterar um nome
        try {
         res.status(200).json({ mensagem: "Alterado com sucesso" }); // Retorna o nome com status 200
        } catch (error) {
            res.status(500).json({ error: error.message }); // Retorna erro 500 se algo der errado
        }
    }




    Deletar(req, res) { // Método para deletar um nome
        const id = req.params.id; // Pega o id da URL
        service.Deletar(id); // Chama o serviço para deletar um nome
        try {
         res.status(204).json({ id }); // Retorna o id com status 200
        } catch (error) {
            res.status(500).json({ error: error.message }); // Retorna erro 500 se algo der errado
        }
    }
}

module.exports = ControllerPessoa; // Exporta a classe ControllerPessoa para ser usada em outros arquivos