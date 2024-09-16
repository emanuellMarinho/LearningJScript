/**
 * forEach é uma maneira diferente de percorrer os elementos de um array.
*/

const numbers = [1, 2, 3, 4, 5, 6]
numbers.forEach((valor, indice, array) => {
    // console.log(valor, indice, array)
})

let total = 0
numbers.forEach(valor => {
    total += valor
})

console.log(total)