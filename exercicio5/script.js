const texto = prompt("Digite uma string para inverter:")
        
function inverterString(s) {
    let resultado = ''
    for (let i = s.length - 1; i >= 0; i--) {
    resultado += s[i]
    }
    return resultado
}   

console.log(`String invertida: ${inverterString(texto)}`)
document.write(`String invertida: ${inverterString(texto)}`)
