let maiorAltura = Number.NEGATIVE_INFINITY;
let menorAltura = Number.POSITIVE_INFINITY;
let somaAlturaHomens = 0;
let numMulheres = 0;


for (let i = 1; i <= 15; i++) {
    const altura = parseFloat(prompt(`Digite a altura da pessoa ${i} (em centímetros):`));
    const genero = prompt(`Digite o gênero da pessoa ${i} (M ou F):`).toUpperCase();

    maiorAltura = Math.max(maiorAltura, altura);
    menorAltura = Math.min(menorAltura, altura);

    if (genero === 'M') {
        somaAlturaHomens += altura;
    }

    if (genero === 'F') {
        numMulheres++;
    }
}

const mediaAlturaHomens = somaAlturaHomens / (15 - numMulheres);

console.log(`Maior altura do grupo: ${maiorAltura} cm`);
console.log(`Menor altura do grupo: ${menorAltura} cm`);
console.log(`Média de altura dos homens: ${mediaAlturaHomens.toFixed(2)} cm`);
console.log(`Número de mulheres: ${numMulheres}`);
