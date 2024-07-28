/**
 * Funções de ordem superior (ou higher-order functions) são funções que operam em outras funções, 
 * seja como argumentos, seja retornando-as. Elas são um conceito fundamental em programação 
 * funcional e são amplamente utilizadas em JavaScript.
*/
// Função
function criaMultiplicador(multiplicador) {
    // Multiplicador
    return function(n) {
        return n * multiplicador
    }
}

const duplica = criaMultiplicador(2)
const triplica = criaMultiplicador(2)
const quadriplica = criaMultiplicador(2)

console.log(duplica(2))
console.log(triplica(2))
console.log(quadriplica(2))
