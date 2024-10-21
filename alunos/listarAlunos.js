const { alunos } = require("./alunos")


function listarAluno(){
    try { 
        console.table(alunos)
    
    } catch (error){
        console.log("erro ao listar aluno");
    

}
}


module.exports = { listarAluno };