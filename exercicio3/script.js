// Função para carregar o arquivo JSON e processar os dados
async function carregarDados() {
    const response = await fetch('faturamento.json')
    const data = await response.json();

    const faturamento = data.faturamento

    let menor = Infinity
    let maior = -Infinity
    let soma = 0
    let diasContados = 0

    for (let i = 0; i < faturamento.length; i++) {
        let valor = faturamento[i]
        if (valor > 0) {
            // Atualizar menor e maior valores
            if (valor < menor) {
                menor = valor
            }
            if (valor > maior) {
                maior = valor
            }
            // Somar valores para cálculo da média
            soma += valor
            diasContados++
        }
    }

    // Calcular a média
    const media = soma / diasContados

    // Contar dias acima da média
    let diasAcimaMedia = 0
    for (let i = 0; i < faturamento.length; i++) {
        if (faturamento[i] > media) {
            diasAcimaMedia++
        }
    }

    // Exibir resultados
    const resultadoHtml = `
        <p>Menor valor de faturamento: R$ ${menor.toFixed(2)}</p>
        <p>Maior valor de faturamento: R$ ${maior.toFixed(2)}</p>
        <p>Número de dias com faturamento acima da média: ${diasAcimaMedia}</p>
    `;

    document.getElementById('resultado').innerHTML = resultadoHtml
}

// Chamar a função para carregar e processar os dados
carregarDados()