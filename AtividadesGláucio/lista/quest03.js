var quantidadeNumeros = prompt("Digite a quantidade de números a serem inseridos");
quantidadeNumeros = parseInt(quantidadeNumeros);

var menorValor, maiorValor, soma;

for (var i = 0; i < quantidadeNumeros; i++) {
    var numero = prompt("Digite o número #" + (i + 1));
    numero = parseFloat(numero);

    if (i === 0) {
        menorValor = numero;
        maiorValor = numero;
        soma = numero;
    } else {
        menorValor = Math.min(menorValor, numero);
        maiorValor = Math.max(maiorValor, numero);
        soma += numero;
    }
}

console.log("Menor valor: " + menorValor);
console.log("Maior valor: " + maiorValor);
console.log("Soma dos valores: " + soma);
