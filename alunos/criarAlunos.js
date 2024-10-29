const { alunos } = require("./alunos")

var  validar  =  require ( 'validator' ) ;

function criarAluno(matricula, nome, email, telefone){
       const novoAluno = { 
        matricula,                                      //ou matricula: matricula(quando não tem define)
        nome,                                           //o nome matricula por exemplo chava e também parametro
        email,
        telefone
    }
    
    try {
      
        if (!validar.isEmail(email)){
            console.error(`O e-mail informado de ${nome} é inválido!`)
            return
        }
        if (
            validar.isEmpty(matricula) ||
            validar.isEmpty(nome) ||
            validar.isEmpty(telefone)
        ){
            console.error("Todos os campos devem ser preenchidos!")
            return
        }
        alunos.push(novoAluno)
    } catch (error) {
        console.error("Error ao cadastrar dados", error.message)
    }   
}

module.exports = { criarAluno }