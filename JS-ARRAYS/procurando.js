const alunos = ["João", "Juliana", "Ana", "Caio", "nathan"];
const medias = [10, 8, 7.5, 9,8.5];


const listaDeAlunosEMedias = [alunos, medias];


function exibeNomeENota(aluno){
    if (listaDeAlunosEMedias[0].includes(aluno)){
        const [alunos,medias] = listaDeAlunosEMedias;
        const indice = alunos.indexOf(aluno);
        const mediaAluno = medias[indice];
        
        console.log(`${aluno} tem a média ${mediaAluno}.` )
    }else{
        console.log("Aluno não encontrado!");
    }
  
}



exibeNomeENota("Juliana")