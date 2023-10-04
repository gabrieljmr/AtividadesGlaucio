var salarioInicial = prompt("Digite o salário inicial do funcionário");
salarioInicial = parseFloat(salarioInicial);

var anoContratacao = 1995;

var salarioAtual = salarioInicial;

for (var ano = anoContratacao + 1; ano <= new Date().getFullYear(); ano++) {
   
    var percentualAumento = (ano - anoContratacao) * 1.5; 
    salarioAtual *= (1 + percentualAumento / 100); 

    console.log("Ano: " + ano + " - Salário: R$ " + salarioAtual.toFixed(2));
}

console.log("Salário atual do funcionário: R$ " + salarioAtual.toFixed(2));
