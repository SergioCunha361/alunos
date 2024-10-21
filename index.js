const { criarAluno } = require("./alunos/criarAlunos")
const { editarAluno } = require("./alunos/editarAlunos")
const { excluirAluno } = require("./alunos/excluirAlunos")
const { listarAluno } = require("./alunos/listarAlunos")



//const prompt = require("prompt-sync")();

// const alunos = [];

// function listarAluno(){
//     try { 
//         console.table(alunos)
    
//     } catch (error){
//         console.log("erro ao listar aluno");
    

// }
// }

// function criarAluno(matricula, nome, email, telefone){
//        const novoAluno = { 
//         matricula,                                      //ou matricula: matricula(quando não tem define)
//         nome,                                           //o nome matricula por exemplo chava e também parametro
//         email,
//         telefone
//     }
    
//     try {
//         alunos.push(novoAluno)
//     } catch (error) {
//         console.error("Error ao cadastrar dados", error.message)
//     }   

// }

// function excluirAluno(matricula, novoNome, novoEmail, novoTelefone){
//     try {
//         const indice  = alunos.findIndex(elementodoArray =>
//             elementodoArray.matricula === matricula             //!! aluno.nome === nome se for um ou outro
//         )
        
//         if (indice === -1){ 
//             console.log("aluno não encontrado!")         // se existir aluno a variavel aluno está  true se nao existir indefinido false
           
//         } else {        
//             let nome = alunos[indice].nome
//             alunos.splice(indice, 1)
//             console.log(`O aluno ${ nome } foi excluído!`);
//         }

//     } catch (error) {
//         console.log("Não podemos exluir - matrícula não cadastrada", error.message)
//     }

// }
    
// function editarAluno(matricula, novoNome, novoEmail, novoTelefone){
//     try {
//         const aluno  = alunos.find(elementodoArray =>
//             elementodoArray.matricula === matricula             //!! aluno.nome === nome se for um ou outro
//         )
        
//         if (aluno){          // se existir aluno a variavel aluno está  true se nao existir indefinido false
//             aluno.nome     = novoNome
//             aluno.email    = novoEmail
//             aluno.telefone = novoTelefone
//             console.log("Aluno atualizado com sucesso!")
//         } else {
//             console.log("Aluno não contratado!")
//         }

//     } catch (error) {
//         console.log("matrícula não cadastrada", error.message)
//     }

// }
    

criarAluno("1012", "Sergio Cunha", "segiocunha@gmail.com", 981518033)
criarAluno("1015", "Gabriel Dias", "gabrieldias@gmail.com", 98885511)

listarAluno()

editarAluno("1015", "Gabriel", "gabrieldias@gmail.com", 98885511)
listarAluno()

excluirAluno("1015")
listarAluno()