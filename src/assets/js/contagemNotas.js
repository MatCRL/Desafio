const contagemDeNotas = function(valor) {
    let sobraValor = valor;
    let quantNotas100;
    let quantNotas50;
    let quantNotas10;
    let quantNotas5;
    let quantNotas1;

    if(sobraValor >= 100){
        quantNotas100 = calcularNotas(100,sobraValor)[0];
        sobraValor = calcularNotas(100,sobraValor)[1];
    }
    if(sobraValor >= 50){
        quantNotas50 = calcularNotas(50,sobraValor)[0];
        sobraValor = calcularNotas(50,sobraValor)[1];
    }
    if(sobraValor >= 10){
        quantNotas10 = calcularNotas(10,sobraValor)[0];
        sobraValor = calcularNotas(10,sobraValor)[1];
    }
    if(sobraValor >= 5){
        quantNotas5 = calcularNotas(5,sobraValor)[0];
        sobraValor = calcularNotas(5,sobraValor)[1];
    }
    if(sobraValor >= 1){
        quantNotas1 = calcularNotas(1,sobraValor)[0];
        sobraValor = calcularNotas(1,sobraValor)[1];
    }

    console.log("quantidade de notas /n")
    console.log("Notas de 100: ", quantNotas100)
    console.log("Notas de 50: ", quantNotas50)
    console.log("Notas de 10: ", quantNotas10)
    console.log("Notas de 5: ", quantNotas5)
    console.log("Notas de 1: ", quantNotas1)
    console.log("Valor que sobro: ", sobraValor);

    return [quantNotas100, quantNotas50, quantNotas10, quantNotas5, quantNotas1];

}

function calcularNotas(valorNota, valorSaque){
    let quantNotas = parseInt(valorSaque/valorNota);
    let valorRestante = valorSaque%valorNota;

    console.log("Dentro função",quantNotas);
    console.log("Dentro função", valorRestante);
    
    return [quantNotas , valorRestante];
}