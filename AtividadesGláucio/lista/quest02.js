var numeros = [];

var pares = 0;
var impares = 0;

for (var i = 0; i < 10; i++) {
    var numero = prompt("Digite o número #" + (i + 1));
    numero = parseInt(numero);

    if (numero % 2 === 0) {
        pares++;
    } else {
        impares++;
    }

    numeros.push(numero);
}

console.log("Números informados: " + numeros.join(", "));
console.log("Quantidade de números pares: " + pares);
console.log("Quantidade de números ímpares: " + impares);
