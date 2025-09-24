
// Ex16 - Tipo de triângulo
let a = 5, b = 5, c = 5;
if (a + b > c && a + c > b && b + c > a) {
    if (a === b && b === c) console.log("Equilátero");
    else if (a === b || a === c || b === c) console.log("Isósceles");
    else console.log("Escaleno");
} else {
    console.log("Não é um triângulo válido");
}
