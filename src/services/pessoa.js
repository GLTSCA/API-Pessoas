const RepositoryPessoa = require("../repository/pessoa");

const repo = new RepositoryPessoa();


class ServicePessoa {
    PegarTodos() {
        return repo.PegarTodos(); // Chama o repositório para pegar todos os nomes
    }
    PegarUm(id) {
       return repo.PegarUm(id); // Chama o repositório para pegar um nome pelo id
    }
    Adicionar(nome) {
        repo.Adicionar(nome); // Chama o repositório para adicionar um nome
    }   
    Alterar(id, nome) {
        repo.Alterar(id, nome); // Chama o repositório para alterar um nome pelo id
    }   
    Deletar(id) {
        repo.Deletar(id); // Chama o repositório para deletar um nome pelo id
    }   
}

module.exports = ServicePessoa;
