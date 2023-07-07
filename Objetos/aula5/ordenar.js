const cliente = require("./clientes.json")

function ordenar(lista, propriedade) {
    const resultado = lista.sort((a, b) => {
      if (a[propriedade] < b[propriedade]) {
        return -1;
      }
      if (a[propriedade] > b[propriedade]) {
        return 1;
      }
      return 0;
    });
  
    return resultado;
  }

  const ordenadoNome =  ordenar(cliente, "nome")
  console.log(ordenadoNome)
//[] servem tbm para acessar uma propriedade

//sort significa ordenar