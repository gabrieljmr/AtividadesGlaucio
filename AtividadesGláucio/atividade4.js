var notas = [];

for (var i = 0; i < 3; i++) {
    var nota = prompt("Digite a nota #" + (i + 1));
    nota = parseFloat(nota);
    notas.push(nota);
}

var media = (notas[0] + notas[1] + notas[2]) / 3;

if (media <= 4) {
    console.log("Reprovado. Média: " + media);
} else if (media < 7) {
    console.log("Recuperação. Média: " + media);

    var notaRecuperacao = prompt("Digite a nota na recuperação");
    notaRecuperacao = parseFloat(notaRecuperacao);

    var novaMedia = (media + notaRecuperacao) / 2;

    if (novaMedia >= 7) {
        console.log("Aprovado na recuperação. Nova média: " + novaMedia);
    } else {
        console.log("Reprovado na recuperação. Nova média: " + novaMedia);
    }
} else {
    console.log("Aprovado. Média: " + media);
}
