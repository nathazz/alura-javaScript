//parâmetros de função
function soma(nmr1,nmr2){
            //2   //2
    return nmr1 + nmr2;
}

console.log(soma(2, 2))
console.log(soma(245, 20))
console.log(soma(-500, 60))

//ordem dos parâmetros
function nomeIdade(nome, idade){
    return `meu nome é ${nome} e minha idade é ${idade}`;
}

//console.log(nomeIdade("taylane" , 17))

function multiplica(numero1 = 1, numero2 = 1){
return numero1 * numero2;
}

console.log(multiplica(soma(4, 5), soma(3,3)))
op