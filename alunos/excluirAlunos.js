const { alunos } = require("./alunos")

function excluirAluno(matricula, novoNome, novoEmail, novoTelefone){
    try {
        const indice  = alunos.findIndex(elementodoArray =>
            elementodoArray.matricula === matricula             //!! aluno.nome === nome se for um ou outro
        )
        
        if (indice === -1){ 
            console.log("aluno não encontrado!")         // se existir aluno a variavel aluno está  true se nao existir indefinido false
           
        } else {        
            let nome = alunos[indice].nome
            alunos.splice(indice, 1)
            console.log(`O aluno ${ nome } foi excluído!`);
        }

    } catch (error) {
        console.log("Não podemos exluir - matrícula não cadastrada", error.message)
    }

}


module.exports = { excluirAluno };