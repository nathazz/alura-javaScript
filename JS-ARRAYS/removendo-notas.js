const notas = [ 10,6,8,5.5, 10];
notas.pop()//remove o ultimo elemento no caso o meu ultimo ali seria o 10

const media = (notas[0] + notas[1]+ notas[2] + notas[3]) / notas.length;

console.log(`A média é ${media}`);
                     //chamando a const media