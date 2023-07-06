const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20"
   }
   
   const objPersonagem2 = Object.create(objPersonagem)
   objPersonagem2.nome = "Gandalf, o Cinzento"
   
   console.log(objPersonagem.nome) //Gandalf
   console.log(objPersonagem2.nome) //Gandalf, o Cinzento
  

   const objPersonagem3 = Object.create(objPersonagem)
   objPersonagem3.nome = "sim, ele é cinzento mesmo(sujo)"
   console.log(objPersonagem3.nome)