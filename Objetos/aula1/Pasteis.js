const precoPastel = 5.00;

const pasteis = {
  Sabores: ["Guisado, queijo, frango, Presunto"],
  Tempero: ["sal, tempero verde, salsa"]
};

const ingredientesExtras = {
  Carnes: ["Calabresa, frutos do mar (camarão, lula, mariscos, peixes), Bacon"],
  Legumes: ["Pimentão, Cebola, Ervilha, Cenoura, Brócolis, Espinafre"],
  Outros: ["Requeijão, Catupiry, Azeitonas, Ovos, Castanhas, Frutas"]
};

console.log("Preço do pastel: R$" + precoPastel + "🥟");

console.log("----- SABORES -----");
console.log(pasteis.Sabores);

console.log("----- TEMPERO -----");
console.log(pasteis.Tempero);

console.log("----- INGREDIENTES EXTRAS - CARNES -----");
console.log(ingredientesExtras.Carnes);

console.log("----- INGREDIENTES EXTRAS - LEGUMES -----");
console.log(ingredientesExtras.Legumes);

console.log("----- INGREDIENTES EXTRAS - OUTROS -----");
console.log(ingredientesExtras.Outros);


