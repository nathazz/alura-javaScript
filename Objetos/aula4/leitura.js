const dados = require('./cliente.json')

console.log(dados);
console.log(typeof dados);
//lwmbrando typeof é para mostrar o valor ou seja String,number,object,function

//stringfy = transformar em String
const clienteString = JSON.stringify(dados);

console.log(clienteString)
console.log(typeof clienteString.nome);

const objetoCliente = JSON.objetoparse(clienteString)


