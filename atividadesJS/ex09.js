
// Ex09 - Cálculo do IMC
let peso = 70, altura = 1.75;
let imc = peso / (altura * altura);
console.log("IMC:", imc.toFixed(2));
if (imc < 18.5) console.log("Abaixo do peso");
else if (imc <= 24.9) console.log("Peso ideal (parabéns)");
else if (imc <= 29.9) console.log("Levemente acima do peso");
else if (imc <= 34.9) console.log("Obesidade grau I");
else if (imc <= 39.9) console.log("Obesidade grau II (severa)");
else console.log("Obesidade grau III (mórbida)");
