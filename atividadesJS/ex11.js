
// Ex11 - Média de 4 notas e aprovação
let nome = "João";
let notas = [7, 6, 8, 9];
let media = (notas[0]+notas[1]+notas[2]+notas[3]) / 4;
console.log("Aluno:", nome);
console.log("Média:", media.toFixed(2));
console.log(media >= 7 ? "Aprovado" : "Reprovado");
