const cliente = {
    nome: "João",
    idade: 18,
    email: "joão@firma.com",
    telefone: ["1155645165", "114550"],
    saldo: 280,

    efetuaPagamento: function (valor){
        if(valor > this.saldo){
            console.error("Salso insuficiente")
        }else{
            this.saldo -= valor;
            console.log(`Pagamento realizado. Novo saldo ${this.saldo}`)
        }
    }
};

cliente.efetuaPagamento(250)