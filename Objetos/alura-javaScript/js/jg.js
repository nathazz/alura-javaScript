/* 
// versão prompt html e js

alert("Aviso!! Por favor, informe qual personagem você deseja \nobs: escreva o nome ou apenas digite o número 😃");
let escolha = prompt("=== Escolha algum destes estilos: 1-Guerreiro🗡, 2-Lutador🥊, 3-Mago🧙, 4-Arqueiro🏹 ===");

// Define os valores das opções disponíveis
const guerreiro = "guerreiro";
const lutador = "lutador";
const mago = "mago";
const arqueiro = "arqueiro";

// Nomes dos personagens padrão
let nomePersonagem = "";

// Verifica a escolha do usuário e exibe informações correspondentes
if (escolha === guerreiro || escolha === "1") {
  nomePersonagem = "Lya";
  alert("Lya, uma ore destemida, abraça o estilo guerreiro com força e coragem. Sua habilidade com a espada é excepcional, combinando ataques poderosos com uma defesa sólida. Ela se destaca pelo seu espírito indomável e determinação implacável.");
} else if (escolha === lutador || escolha === "2") {
  nomePersonagem = "Kujo";
  alert("Kujo, o ore ágil e destemido, domina as artes marciais, tornando-se um lutador formidável. Com o tempo, ele pode aprender diversos estilos de luta.");
} else if (escolha === mago || escolha === "3") {
  nomePersonagem = "Hylia";
  alert("Hylia, a ore curiosa e talentosa, desvendou os segredos da magia, tornando-se uma poderosa maga.");
} else if (escolha === arqueiro || escolha === "4") {
  nomePersonagem = "Elin";
  alert("O estilo arqueiro de Elin é uma combinação perfeita de precisão, agilidade e destreza, permitindo que ela atinja seus alvos com maestria e se mova graciosamente pelo campo de batalha. Além disso, ela também é uma ore.");
} else {
  alert("Opção inválida! Por favor, reinicie e digite o nome dos personagens que mencionei.");
}

// Pergunta ao usuário se deseja mudar o nome do personagem
let resposta = prompt("Você deseja mudar o nome do seu personagem?");
// Verifica a resposta e realiza a saudação correspondente
if (resposta.toLowerCase() === "sim" || resposta.toLowerCase() === "yes" || resposta.toLowerCase() === "s" || resposta.toLowerCase() === "ss") {
  let novoNome = prompt("Digite o novo nome do seu personagem:");
  if (novoNome.trim() !== "") {
    nomePersonagem = novoNome;
  }
}

// Função de boas vindas
function saudacao(nome = "ore") {
  alert("Olá, " + nome + "! Obrigado por escolher esse belo personagem. Com coragem e determinação, avançamos sem temer. Somos fortes, somos unidos, somos invencíveis! Pelos nossos ideais, lutaremos até o fim! ❤");
}
// Exibe de boas vindas  final
saudacao(nomePersonagem);
 */


//versão via terminal

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Aviso!! Por favor, informe qual personagem você deseja \nobs: escreva o nome ou apenas digite o número 😃");
rl.question('=== Escolha algum destes estilos: 1-Guerreiro🗡, 2-Lutador🥊, 3-Mago🧙, 4-Arqueiro🏹 === \n', (escolha) => {
  // Define os valores das opções disponíveis
  const guerreiro = "guerreiro";
  const lutador = "lutador";
  const mago = "mago";
  const arqueiro = "arqueiro";

  // Nomes dos personagens padrão
  let nomePersonagem = "";

  // Verifica a escolha do usuário e exibe informações correspondentes
  if (escolha === guerreiro || escolha === "1") {
    nomePersonagem = "Lya";
    console.log("Lya, uma ore destemida, abraça o estilo guerreiro com força e coragem. Sua habilidade com a espada é excepcional, combinando ataques poderosos com uma defesa sólida. Ela se destaca pelo seu espírito indomável e determinação implacável.");
  } else if (escolha === lutador || escolha === "2") {
    nomePersonagem = "Kujo";
    console.log("Kujo, o ore ágil e destemido, domina as artes marciais, tornando-se um lutador formidável. Com o tempo, ele pode aprender diversos estilos de luta.");
  } else if (escolha === mago || escolha === "3") {
    nomePersonagem = "Hylia";
    console.log("Hylia, a ore curiosa e talentosa, desvendou os segredos da magia, tornando-se uma poderosa maga.");
  } else if (escolha === arqueiro || escolha === "4") {
    nomePersonagem = "Elin";
    console.log("O estilo arqueiro de Elin é uma combinação perfeita de precisão, agilidade e destreza, permitindo que ela atinja seus alvos com maestria e se mova graciosamente pelo campo de batalha. Além disso, ela também é uma ore.");
  } else {
    console.error("Opção inválida! Por favor, reinicie e digite o nome/números dos personagens que mencionei.");
  }

  // Pergunta ao usuário se deseja mudar o nome do personagem
  rl.question('Você deseja mudar o nome do seu personagem? (sim/não): ', (resposta) => {
    // Verifica a resposta e realiza a saudação correspondente
    if (resposta.toLowerCase() === "sim" || resposta.toLowerCase() === "s") {
      rl.question('Digite o novo nome do seu personagem: ', (novoNome) => {
        if (novoNome.trim() !== "") {
          nomePersonagem = novoNome;
        }
        saudacao(nomePersonagem);
        rl.close();
      });
    } else {
      saudacao(nomePersonagem);
      rl.close();
    }
  });
});

// Função de boas vindas
function saudacao(nome = "ore") {
  console.log("Olá, " + nome + "! Obrigado por escolher esse belo personagem. Com coragem e determinação, avançamos sem temer. Somos fortes, somos unidos, somos invencíveis! Pelos nossos ideais, lutaremos até o fim! ❤");
}
//=> arrow function
