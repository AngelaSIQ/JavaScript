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

