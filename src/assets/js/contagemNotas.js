const contagemDeNotas = function(valor) {
    let sobraValor = valor;
    let notasDisponiveis = [100, 50, 10, 5, 1];
    let quantNotasFinal = {};

    // calcula as notas enquanto não zerar o valor total digiado
    while (sobraValor > 0) {
        // realiza um for para percorrer o array de notas disponíveis
        for (const nota of notasDisponiveis) {
            let quantNotasEValor = calcularNotas(nota, sobraValor);

            quantNotasFinal[nota] = quantNotasEValor.quantNotas;
            sobraValor = quantNotasEValor.valorRestante;
        }
    }

    return quantNotasFinal;
};
// função para calcular quantidade de notas e valor restante do total
function calcularNotas(valorNota, valorSaque){
    let quantNotas = parseInt(valorSaque/valorNota);
    let valorRestante = valorSaque%valorNota;
    
    return {quantNotas: quantNotas , valorRestante: valorRestante};
}