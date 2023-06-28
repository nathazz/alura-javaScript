//forEach é um método de array que permite percorrer cada elemento de um array e executar uma ação personalizada para cada um deles. 
//Ele simplifica o processo de iteração e torna o código mais legível e conciso.


const notas = [10,6.5,8,7.5]
//chamamos notas antes do forEach
let somaDasNotas = 0;
//o parâmetro nota representa todos os valores que estão no meu array
notas.forEach(
function(nota,indice){
    somaDasNotas += nota;
    console.log(indice)
}
);

const media = somaDasNotas  / notas.length

console.log(`A média das notas é ${media}`)