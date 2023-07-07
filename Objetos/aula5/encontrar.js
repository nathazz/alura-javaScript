const clientes = require("./clientes.json");

function encontrar(lista, chave, valor) {
  return lista.find((item) => item[chave].includes(valor));
}
//include = vai verificar se esta incluindo
const encontrado = encontrar(clientes, "nome", "Kirby");
const encontrado2 = encontrar(clientes, "telefone", "1918820860")
console.log(encontrado);
console.log(encontrado2)
//o find vai retornar um objeto se ele for true(se ele existir) /  é usado para buscar um elemento em um array com base em uma determinada condição.
// é bom usar essa condição pois vc pode puxar qualquer objeto que estiver la, sem nenhum esforço