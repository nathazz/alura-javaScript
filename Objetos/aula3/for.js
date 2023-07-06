const cliente = {
    nome: "João",
    idade: 18,
    email: "joão@firma.com",
    telefone: ["1155645165", "114550"]
};

//criando um novo objeto para o const cliente(guardando um objeto dentro de outro)
cliente.endereco = [
{
    rua: "R. Joseph Climber",
    numero: 137,
    apartamento: true,
    complemento: "ap 934"
}
];

// in faz com que seja capturado cada uma das chaves no objeto cliente. Isto é, deixar a chave em cliente, em uma tradução livre.
for(let chave in cliente){
    //o typeof é um operador em JavaScript que permite verificar o tipo de dado de uma expressão.
    let tipo = typeof cliente[chave]
    if(tipo !==  'object' && tipo !== "function"){
        console.log(`A chave ${chave} tem o valor ${cliente[chave]}`)
    }
   
}