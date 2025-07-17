/* Questão 1 */


console.log('Bem vindo');




/* Questão 2 */




let loja = {
    preços: [2.00, 3.00, 5.00],
    produtos: ['camiseta', 'sapato', 'vestido'],
    clientes: ['maria', 'joao', 'carla'],
}




console.log(loja.clientes, loja.preços, loja.produtos)


/* Questão 3 */




let Preço = (50)
let desconto1 = Preço - 5
let desconto2 = Preço - 10
let desconto3 = Preço - 20
console.log("Desconto 1: " + desconto1 )
console.log("Desconto 2: " + desconto2)
console.log("Desconto 3: " + desconto3)


/* Questão 4 */


function cliente(nome) {
    console.log("Seja bem-vinda " + nome);
}


cliente("Maria");




/* Questão 5 */




let carrinho = ['bolsa', ' brincos', ' saia', ' chapéu. '];
console.log("Seu carrinho: " + carrinho)
carrinho.shift();
console.log("Seu carrinho:" + carrinho + "você excluiu o primeiro item da lista")




/* Questão 6 */


function verificarCompra(preco, saldo){


    if (saldo >= preco) {
        return "compra realizada";
    } else {
        return "saldo insuficiente";
    }
   
}


let preco = 100;
let saldo = 150;


let resultado = verificarCompra(produto, saldo);
console.log(resultado);


preco = 200;
saldo = 150;
resultado = verificarCompra(produto, saldo);
console.log(resultado);


/* Questão 7 */


const limiteEstoque = 10;
let estoqueAtual = 0;


while (estoqueAtual < limiteEstoque) {
    estoqueAtual++;
    console.log('peça adicionada, o estoque é de: ${estoqueAtual}');
}


console.log("estoque cheio, não é possive adicionar peças");


/* Questão 8 - 2 funções para a questão 3 */


function calcularDesconto(precoProduto, desconto) {
    return precoProduto - desconto;
}


function exibirDescontos(precoProduto) {
    console.log("Desconto 1: " + calcularDesconto(precoProduto, 5));
    console.log("Desconto 2: " + calcularDesconto(precoProduto, 10));
    console.log("Desconto 3: " + calcularDesconto(precoProduto, 20));
}


let precoProduto = 50;
exibirDescontos(precoProduto);


/* Questão 9 */


let produto = {
    nome: "Camiseta",
    preco: 49.90
};


let cliente = {
    nome: "João Silva",
    email: "joao.silva@email.com"
};


console.log("Produto:");
console.log("Nome:", produto.nome);
console.log("Preço:", produto.preco);


console.log("\nCliente:");
console.log("Nome:", cliente.nome);
console.log("Email:", cliente.email);


/* Questão 10 */


function pagamentoParcelado(precoTotal, numParcelas) {
    let valorParcela = precoTotal / numParcelas;
    console.log(`Pagamento parcelado em ${numParcelas}x de R$ ${valorParcela.toFixed(2)}`);
    return valorParcela;
}


function pagamentoComDesconto(precoTotal, percentualDesconto) {
    let valorFinal = precoTotal - (precoTotal * (percentualDesconto / 100));
    console.log(`Pagamento com ${percentualDesconto}% de desconto: R$ ${valorFinal.toFixed(2)}`);
    return valorFinal;
}




let precoProduto = 250;
let parcelas = 2;      
let desconto = 20;      


console.log("Opções de Pagamento");
pagamentoParcelado(precoProduto, parcelas);
pagamentoComDesconto(precoProduto, desconto);


