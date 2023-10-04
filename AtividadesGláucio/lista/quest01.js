var populacaoA = 80000;
var populacaoB = 200000;

var taxaCrescimentoA = 0.03;
var taxaCrescimentoB = 0.015;

var anos = 0;

while (populacaoA < populacaoB) {
    populacaoA *= (1 + taxaCrescimentoA);
    populacaoB *= (1 + taxaCrescimentoB);
    anos++;
}

console.log("Número de anos necessários: " + anos);
console.log("População do país A: " + Math.round(populacaoA));
console.log("População do país B: " + Math.round(populacaoB));
