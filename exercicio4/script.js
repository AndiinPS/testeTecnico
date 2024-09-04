 // Dados fornecidos
 const faturamentoEstado = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
};

// Calcular o faturamento total
let totalFaturamento = 0
for (const estado in faturamentoEstado) {
    totalFaturamento += faturamentoEstado[estado]
}

// Calcular e exibir o percentual de cada estado
let resultadoHtml = '<ul>'
for (const estado in faturamentoEstado) {
    const percentual = (faturamentoEstado[estado] / totalFaturamento) * 100
    resultadoHtml += `<li>Percentual de ${estado}: ${percentual.toFixed(2)}%</li>`
}
resultadoHtml += '</ul>'

document.getElementById('resultado').innerHTML = resultadoHtml