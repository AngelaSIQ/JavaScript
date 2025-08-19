/*01*/ 

console.log('primeira atividade');

/*02*/ 

let nome = 'angela';
console.log(nome);

const idade = 17;
console.log(idade);

/*03*/

let numero1 = parseFloat(prompt("Digite o primeiro número: "));
let numero2 = parseFloat(prompt("Digite o segundo número: "));

let soma = numero1 + numero2;
let subtracao = numero1 - numero2;
let multiplicacao = numero1 * numero2;

let divisao, resto;

if (numero2 !== 0) {
    divisao = numero1 / numero2;
    resto = numero1 % numero2;
} else {
    divisao = "não é possivel dividir por zero";
    resto = "não possui resto";
}

console.log("Soma: " + soma);
console.log("Subtração: " + subtracao);
console.log("Multiplicação: " + multiplicacao);
console.log("Divisão: " + divisao);
console.log("Resto da divisão: " + resto);


/*04*/

let numero = parseFloat(prompt('digite um numero: '));

if (numero % 2 === 0){
    console.log('o numero' + numero + 'é par');
}   else {
    console.log('o numero' + numero + 'é impar');
}

/*05*/

let horario = parseFloat(prompt('digite o horario: '))

if (horario >= 6 && horario < 12) {
    console.log('bom dia!');
}   else if (horario >= 12 && horario < 18) {
    console.log('boa tarde!');
}   else if (horario >= 18 && horario < 23) {
    console.log('boa noite!');
}   else if (horario >= 0 && horario < 6) {
    console.log('boa madrugada!');
}   else {
    console.log('horario invalido');
}

/*06*/

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let par = [];
let impar = [];

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 === 0) {
    par.push(numeros[i]); 
  } else {
    impar.push(numeros[i]); 
  }
}

console.log('os numeros pares são: ' + par);
console.log('os numeros impares são:' + impar);

/*07*/

function quadrado(numero) {
  return numero * numero;
}

let resultado = quadrado(10);
console.log("O quadrado de 5 é: " + resultado);


/*08*/

function MaiorDez(array) {
  let resultado = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] > 10) {
      resultado.push(array[i]);
    }
  }
  return resultado;
}

let numeross = [5, 12, 8, 20, 3, 15, 1];
let maiorDeDez = MaiorDez(numeross);
console.log("Números maiores que 10:" + maiorDeDez);

 /*09*/

let Idade = parseFloat(prompt('digite sua idade: '))

if (idade >= 0 && idade <= 12) {
  console.log("criança");
} else if (idade >= 13 && idade <= 17) {
  console.log("adolescente");
} else if (idade >= 18 && idade <= 59) {
  console.log("adulto");
} else if (idade >= 60) {
  console.log("idoso");
} else {
  console.log("Idade inválida.");
}

/*10*/

function executar(callback) {
  console.log("salvando...");

  setTimeout(() => {
    callback(); 
    console.log("pedido feito com sucesso");
  }, 3000);
}

executar(() => {
  console.log("pedido salvo");
});