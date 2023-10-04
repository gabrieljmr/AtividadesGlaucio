var quantNum = prompt("Quantos números você deseja somar?");

quantNum = parseInt(quantNum);

var soma = 0;

for (var i = 0; i < quantNum; i++) {
    
    var num = prompt("Digite o número #" + (i + 1));
    num = parseInt(num);

    
    soma += num;
}
console.log("A soma dos números é: " + soma);
