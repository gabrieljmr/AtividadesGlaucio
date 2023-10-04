function calcularCirculo(raio) {
   
    var area = Math.PI * Math.pow(raio, 2);

    var perimetro = 2 * Math.PI * raio;

    return {
        area: area,
        perimetro: perimetro
    };
}

var raio = prompt("Digite o raio do círculo");
raio = parseFloat(raio);

var resultados = calcularCirculo(raio);

console.log("Área do círculo: " + resultados.area.toFixed(2));
console.log("Perímetro do círculo: " + resultados.perimetro.toFixed(2));
