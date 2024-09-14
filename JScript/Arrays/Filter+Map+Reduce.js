/**
 * Retorne a soma do dobro de todos os pares
 * -> filtrar pares
 * -> dobrar os valores
 * -> reduzir
*/

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

function valorPar() {
    return numeros.filter(value => value % 2 === 0)
}

function dobrarValores(valores) {
    return valores.map(value => value * 2)
}

function reduzirValores(valores) {
    return valores.reduce((acc, val) => acc + val, 0)
}

const pares = valorPar()
const dobrados = dobrarValores(pares)
const resultado = reduzirValores(dobrados)

console.log(resultado)


// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
// const pares = numeros.filter(function(valor) {
//     return valor % 2 === 0
// }).map(function(valor) {
//     return valor * 2
// }).reduce(function(acumulador, valor) {
//     return acumulador + valor
// })
// console.log(pares)