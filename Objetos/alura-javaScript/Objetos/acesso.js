const cliente = {
    nome: "Andre",
    idade: 32,
    cpf: "1122312211",
    email:"andre@dominio.com"
}

console.log(`o nome do cliente é ${cliente["nome"]} e essa pessoa tem ${cliente["idade"]}`)

const chaves = ["nome", "idade", "cpf", "email"];

chaves.forEach((chave) =>{
console.log(`A chave ${chave} tem valor ${cliente[chave]}`)
})

//substring serve para vc pegar determinada parte de algo
//inves de usar ${cliente.idade}, podemos chamar alguma propriedades direto do array
// ${cliente["nome"]} 