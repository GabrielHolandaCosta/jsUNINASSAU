
// Ex12 - Condições de pagamento
let valorProduto = 1000;
let codigo = 2;
let valorFinal;

switch(codigo){
    case 1: valorFinal = valorProduto * 0.85; break;
    case 2: valorFinal = valorProduto * 0.90; break;
    case 3: valorFinal = valorProduto; break;
    case 4: valorFinal = valorProduto * 1.10; break;
    default: valorFinal = valorProduto;
}

console.log("Valor final:", valorFinal);
