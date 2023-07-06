const cliente = {
    nome: "João",
    idade: 18,
    email: "joão@firma.com",
    telefone: ["1155645165", "114550"]
};
//criando um novo objeto para o const cliente(guardando um objeto dentro de outro)
cliente.endereco = {
    rua: "R. Joseph Climber",
    numero: 137,
    apartamento: true,
    complemento: "ap 934"
};

console.log(cliente);
