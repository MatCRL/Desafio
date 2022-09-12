const contagemDeNotas = function(valor) {
    let sobraValor = valor;
    let notasDisponiveis = [100, 50, 10, 5, 1];
    let quantNotasFinal = {};

    while (sobraValor > 0) {
        for (const nota of notasDisponiveis) {
            let quantNotasEValor = calcularNotas(nota, sobraValor);

            quantNotasFinal["Quantidade de notas de "+nota+": "] = quantNotasEValor.quantNotas;
            sobraValor = quantNotasEValor.valorRestante;
        }
    }

    return quantNotasFinal;
};

function calcularNotas(valorNota, valorSaque){
    let quantNotas = parseInt(valorSaque/valorNota);
    let valorRestante = valorSaque%valorNota;

    return {quantNotas: quantNotas , valorRestante: valorRestante};
}