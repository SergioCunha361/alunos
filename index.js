const { criarAluno }   =  require("./alunos/criarAlunos")
const { editarAluno }  =  require("./alunos/editarAlunos")
const { excluirAluno } =  require("./alunos/excluirAlunos")
const { listarAluno }  =  require("./alunos/listarAlunos")



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
    
//EXEMPLO PARA MY COMPYLE
// let clientes = [
//     { idede: 59,
//       nome: "sergio",
//       tel: 981518033},
//     { idede: 57,
//       nome: "ederlinda",
//       tel: 999837527},
//     { idede: 18,
//       nome: "gabriel",
//       tel: 999881111}    
// ]

//let clientes = 
//   { 59, "sergio", 981518033}
//    { 57, "ederlinda", 999837527},
//    { idade: 18, nome: "abriel", tel: 999881111}    



// let resultado = clientes.find(cliente => cliente.nome === "sergio")
// console.log(resultado)
// if (resultado) {
//     console.log("ok")
// } else {
//     console.log("não oK")
//}


criarAluno("1012", "Sergio Cunha", "segiocunha@gmail.com", "981518033")
criarAluno("1015", "Gabriel Dias", "gabrieldias@gmail.com", "98885511")
criarAluno("1021", "Joao", "joao@gmail.com", "999998888")
//listarAluno()

editarAluno("1015", "Gabriel", "gabrieldias@gmail.com", "98885511")


//("1530", "Arilda", "arildacunha@gmail.com", "32222209")

listarAluno()

// excluirAluno("1015")
// listarAluno()

