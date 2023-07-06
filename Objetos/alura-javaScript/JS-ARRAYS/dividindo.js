//slice significa fatiar, ela serve para vc tirar objetos específicos de uma aplicação

const alunos = [/*0*/'João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie',
 'Guilherme', 'Aline', 'Fabiana', 'Andre'/*10*/ , 'Carlos', 
 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius',
  'Renan', 'Renata', 'Daisy', 'Camilo'];
                           //1  //posição que vc quer que recorte
  const sala1 = alunos.slice(0,10);
  //0 representa o 1 e dps do virgula selecione qual vc quer
  const sala2 = alunos.slice(10);
  //ele sabe que vc quer pegar os outros 10 alunos :)
  console.log(sala1)
  console.log(sala2)

  const sala3 = alunos.push()
  //length /2