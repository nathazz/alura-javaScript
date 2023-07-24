//object entries
console.log("----Object entries----")
const pessoa = {
    nome: "nathan",
    idade:18,
    cidade:"Rio grande do sul"
}
const arrays = Object.entries(pessoa);
//Basicamente ele faz que seu objeto se transfore em uma lista 
console.log(arrays)

//////////////////////////////////////////////

//object assign
console.log("----Object assign----")
const destino = {};

const fonte1 = {
    a: 1,
    b:2
}
const fonte2 ={
    c:3
}
//ele copia o valor da fonte1 e fonte 2 e joga dentro do destino
Object.assign(destino, fonte1)
console.log(destino)

////////////////////////////////////////////

//object Key🕴
console.log("----Object key----")
const cliente = {
    nome: "João",
    idade: 18,
    email: "joão@firma.com",
    telefone: ["1155645165", "114550"],
    DataDeNacimento: "15/02/2000"
}

//ele puxa as  chaves do objeto(cliente) em array(lista)
const chaves = Object.keys(cliente)
console.log(chaves)


