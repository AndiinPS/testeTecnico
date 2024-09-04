// Função para verificar se um número pertence à sequência de Fibonacci
function verificarFibonacci(numero) {
    let a = 0, b = 1
    if (numero === 0 || numero === 1) {
        return true; // 0 e 1 são parte da sequência de Fibonacci
    }

    while (b <= numero) {
        if (b === numero) {
            return true; // Número encontrado na sequência
        }
        let proximo = a + b
        a = b
        b = proximo
    }

    return false; // Número não encontrado na sequência
}

// Solicitar número ao usuário
const numero = parseInt(prompt("Digite um número para verificar se pertence à sequência de Fibonacci:"), 10)

// Verificar e exibir o resultado
const pertence = verificarFibonacci(numero)
const resultadoHtml = pertence ? 
    `<p>O número ${numero} pertence à sequência de Fibonacci.</p>` : 
    `<p>O número ${numero} não pertence à sequência de Fibonacci.</p>`

document.getElementById('resultado').innerHTML = resultadoHtml
