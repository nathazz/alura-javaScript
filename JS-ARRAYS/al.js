 //Atualizando lista utilizando SPLICE que siginifca "juntar" ou "emendar"

// pode se usar para remover,substituir  e até mesmoe adicionar, hj usei para remover e adicionar 
                //0      //1    //2      //3     //4       //5   //6
const nomes = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"];

nomes.splice(1,2, 'nathan', 'taylane')
// no caso eu quis remover a ana eo caio por isso botei 1,2 e dps adicionei um nome
//e esse nome vai substituir ana e caio por ele, no caso ele seria o 'nathan'
console.log(nomes)