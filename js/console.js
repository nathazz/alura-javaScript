/* 
console.log("deu erro");
console.error(new Error("deu erro")); */

const { text } = require("stream/consumers");

const numero = 5;
const texto = "5";

console.log(numero == texto)

//typeoff
console.log(typeof numero)
console.log(typeof texto)

// == só compara o valor
// === compara o valor e o tipo de dado

//conversão explicita

Number()
String()