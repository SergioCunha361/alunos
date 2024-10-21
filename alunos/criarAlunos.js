const { alunos } = require("./")

function criarAluno(matricula, nome, email, telefone){
       const novoAluno = { 
        matricula,                                      //ou matricula: matricula(quando não tem define)
        nome,                                           //o nome matricula por exemplo chava e também parametro
        email,
        telefone
    }
    
    try {
        alunos.push(novoAluno)
    } catch (error) {
        console.error("Error ao cadastrar dados", error.message)
    }   
}

module.exports = { criarAluno }