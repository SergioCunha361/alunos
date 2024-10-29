const { alunos } = require("./alunos");

function excluirTodosAlunoss(){
        try {
            alunos.length = 0
            console.log("Alunos excluidos com sucesso")
    } catch (error){
    console.error("Erro ao excluir todos os alunos!");
    }  
}
module.exports = { excluirTodosAlunoss }