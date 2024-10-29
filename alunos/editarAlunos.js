const { alunos } = require("./alunos")


function editarAluno(matricula, novoNome, novoEmail, novoTelefone){
    const aluno  = alunos.find(elementodoArray =>
        elementodoArray.matricula === matricula)  
    
    try {
        console.log("ok")
           
        
        console.log(aluno)            
        if (aluno !== ""){ 
            if (!validar.isEmail(novoEmail)){
                console.error(`O e-mail informado de ${novoNome} é inválido!`)
                return
            }
            if (
                validar.isEmpty(novoNome) ||
                validar.isEmpty(novoTelefone)
            ){
                console.error("Todos os campos devem ser preenchidos!")
                return
            }         // se existir aluno a variavel aluno está  true se nao existir indefinido false
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