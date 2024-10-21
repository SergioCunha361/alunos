const { alunos } = require("./")


function editarAluno(matricula, novoNome, novoEmail, novoTelefone){
    try {
        const aluno  = alunos.find(elementodoArray =>
            elementodoArray.matricula === matricula             //!! aluno.nome === nome se for um ou outro
        )
        
        if (aluno){          // se existir aluno a variavel aluno está  true se nao existir indefinido false
            aluno.nome     = novoNome
            aluno.email    = novoEmail
            aluno.telefone = novoTelefone
            console.log("Aluno atualizado com sucesso!")
        } else {
            console.log("Aluno não contratado!")
        }

    } catch (error) {
        console.log("matrícula não cadastrada", error.message)
    }

}


module.exports = { editarAluno };