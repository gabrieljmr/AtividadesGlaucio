function calcularMontante(capitalInicial, taxaJuros, tempoMeses) {
   
    var taxaDecimal = taxaJuros / 100;

    var montante = capitalInicial * Math.pow((1 + taxaDecimal), tempoMeses);

    montante = Math.round(montante * 100) / 100;

    return montante;
}

var capitalInicial = prompt("Digite o capital inicial investido");
capitalInicial = parseFloat(capitalInicial);

var taxaJuros = prompt("Digite a taxa de juros mensal em percentual");
taxaJuros = parseFloat(taxaJuros);

var tempoMeses = prompt("Digite o tempo do investimento em meses");
tempoMeses = parseInt(tempoMeses);

var resultadoMontante = calcularMontante(capitalInicial, taxaJuros, tempoMeses);

console.log("O montante do investimento é: R$ " + resultadoMontante.toFixed(2));
