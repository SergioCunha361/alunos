const { alunos } = require("./alunos")


function editarAluno(matricula, novoNome, novoEmail, novoTelefone){
    const aluno  = alunos.find(elementodoArray =>
        elementodoArray.matricula === matricula)  
    
    try {                   
        if (aluno){ 
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