const banco = new Array("Jão", "Gabiru", "Jubiscleu", "Robervaldo", "Jurema", "Jusbiscréia", "Junin");

     class RepositoryPessoa{
        PegarTodos(){
            return banco; // Retorna o array de nomes
        }

        PegarUm(index){
            return banco[index]; // Retorna o primeiro nome do array
        }

        Adicionar(nome){
            banco.push(nome); // Adiciona um novo nome ao array

        }

        Alterar(index, nome){
            banco[index] = nome; // Altera o nome no índice especificado
        }

      

        Deletar(index){
            banco.splice(index, 1); // Remove o nome no índice especificado

        }
     }

     module.exports = RepositoryPessoa;