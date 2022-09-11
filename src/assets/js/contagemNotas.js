const contagemDeNotas = function(valor) {
    let sobraValor = valor;
    let notasDisponiveis = [100, 50, 10, 5, 1];
    let quantNotasFinal = {};

    while (sobraValor > 0) {
        for (const nota of notasDisponiveis) {
            let quantNotasEValor = calcularNotas(nota, sobraValor);
            quantNotasFinal[nota] = quantNotasEValor.quantNotas;
            sobraValor = quantNotasEValor.valorRestante;
        }
    }

    console.log("quantidade de notas /n")
    console.log("Final: ", quantNotasFinal);

    return quantNotasFinal;
};

function calcularNotas(valorNota, valorSaque){
    let quantNotas = parseInt(valorSaque/valorNota);
    let valorRestante = valorSaque%valorNota;

    console.log("Dentro função",quantNotas);
    console.log("Dentro função", valorRestante);
    
    return {quantNotas: quantNotas , valorRestante: valorRestante};
}