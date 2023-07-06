const { text } = require("stream/consumers");


//DECLARAÇÃO DE FUNÇÃO

//1) declara a função
                    //string
function imprimeTexto(texto)/*paramêtro */{
    console.log(texto) // tem que chamar o paramêtro
}

//2) executa a função (1 ou mais vezes)
imprimeTexto(soma()); // a gente esta retornando outra função 



//três formas de escrever funções 
function soma(){
    return resultado = 2+2; //retorna 
}
//console.log(soma()) | está puxando a function soma
