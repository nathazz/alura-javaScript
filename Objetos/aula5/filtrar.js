const clientes = require("./clientes.json");

function filtrarApartamentosSemComplementos(clientes){
    return clientes.filter((clientes) => {
        return ( clientes.endereco.apartamento  && !clientes.endereco.hasOwnProperty("complemento"))
    });
}
//Essa função hasOwnProperty vai verificar se o endereço do cliente tem complemento
//o filter vai receber um função dentro que se ele for verdadeira ele ira retornar e se for falsa ele ira ignorar

const filtrados = filtrarApartamentosSemComplementos(clientes);

console.log(filtrados)