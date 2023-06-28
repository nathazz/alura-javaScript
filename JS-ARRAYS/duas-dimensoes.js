
const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9,6];
const abaixoDaMedia = [0,1,2,3,4,5]

//criamos um const e chamamos ela dentro de um outro array
const listaDeAlunosEMedias = [alunos, medias,abaixoDaMedia];
//a gente juntou os arrays e assim fazendo que ele mostre os nomes,acima da média e abaixo da média

console.log(
    `A aluna da posição 1 da lista de alunos é: ${listaDeAlunosEMedias[0][3]}.
     A nota dessa aluna é ${listaDeAlunosEMedias[2][3]}.
    `
);


// aqui acessamos um elemento de outra lista. a gente puxou o listaDeAlunosEMedias e dps usamos []
//o primeiro [] serve para informar qual listas queremos utilizar e o segundo [] serve para pegar 
// o elemento em que queremos pegar