// QUESTÃO 1

const saudar = (nome) => {
    return `Olá, ${nome}!`;
  };

// QUESTÃO 2

function executarOperacao(num1, num2, callback) {
    return callback(num1, num2);
  }

const somar = (a, b) => a + b;
const multiplicar = (a, b) => a * b;
console.log(executarOperacao(5, 3, somar));       
console.log(executarOperacao(5, 3, multiplicar)); 
  

// QUESTÃO 3

function exibirMensagem(nome, callback) {
    return callback(nome);
  }
  
const mensagemDeBoasVindas = nome => `Seja bem-vindo ${nome}!`;
const mensagemDeDespedida = nome => `Ate logo ${nome}!`;
console.log(exibirMensagem("Ana", mensagemDeBoasVindas));  
console.log(exibirMensagem("Ana", mensagemDeDespedida));   
  

// QUESTÃO 4 

function verificarNumero(numero) {
    return new Promise((resolve, reject) => {
      if (numero >= 0) {
        resolve(`Número válido: ${numero}`);
      } else {
        reject("erro: número negativo não é permitido");
      }
    });
  }
  
verificarNumero(10)
.then(mensagem => console.log(mensagem))   
.catch(erro => console.error(erro));
  
verificarNumero(-5)
.then(mensagem => console.log(mensagem))
.catch(erro => console.error(erro));       
  

// QUESTÃO 5 

function consultarPaciente(nome) {
    return new Promise((resolve, reject) => {
      if (nome.trim() !== "") {
        resolve(`Consulta para ${nome} agendada com sucesso.`);
      } else {
        reject("Erro: nome do paciente não pode ser vazio.");
      }
    });
  }
  
consultarPaciente("João")
.then(mensagem => console.log(mensagem))  
.catch(erro => console.error(erro));
  
consultarPaciente("")
.then(mensagem => console.log(mensagem))
.catch(erro => console.error(erro));      
  

// QUESTÃO 6

function consultarPaciente(nome) {
    return new Promise((resolve, reject) => {
      if (nome.trim() !== "") {
        resolve(`Consulta de ${nome} agendada com sucesso.`);
      } else {
        reject("Erro: nome do paciente não pode ser vazio.");
      }
    });
  }
  
async function agendarConsulta(nome) {
    try {
      const mensagem = await consultarPaciente(nome);
      console.log(mensagem);
    } catch (erro) {
      console.error(erro);
    }
  }
  
agendarConsulta("Maria"); 
agendarConsulta("");       
  

//QUESTÃO 7

function verificarHorario(atualHora) {
    return new Promise((resolve, reject) => {
      if (typeof atualHora !== "number" || atualHora < 0 || atualHora > 23) {
        reject("Erro: hora inválida.");
      } else if (atualHora >= 8 && atualHora < 17) {
        resolve("Estamos abertos para atendimento.");
      } else {
        reject("Estamos fechados no momento.");
      }
    });
  }
  
async function checarAtendimento(hora) {
    try {
      const mensagem = await verificarHorario(hora);
      console.log(mensagem);
    } catch (erro) {
      console.error(erro);
    }
  }
  
checarAtendimento(10); 
checarAtendimento(20);  
checarAtendimento(25); 
  