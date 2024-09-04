//Variáveis
let indice = 13
let soma = 0
let k = 0

// Loop para calcular a soma
while (k < indice) {
    k++
    soma += k
}

// Exibir o resultado
document.getElementById('resultado').innerHTML = `A soma dos números de 1 até ${indice} é ${soma}.`
