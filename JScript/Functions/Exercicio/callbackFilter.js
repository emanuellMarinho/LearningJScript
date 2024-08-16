/**
 * Exercício 2: Filtro de Array com Callback
 * Crie uma função chamada filtrarArray que recebe um array de números e um callback. 
 * A função deve filtrar os números do array com base na condição definida pelo callback.
*/

const arrayList = [1, 2, 3, 4, 5, 6, 7]

function filtraArray(array, callback) {
    const resultado = []
    for (let i of array) {
        // Se o callback aplicado ao elemento i retorna true, então execute o código
        if (callback(i)) {
            resultado.push(i)
        }
    }
    return resultado
}

// Exemplo de uso: Filtrar apenas os números pares
const numerosPares = filtraArray(arrayList, (numero) => {
    return numero % 2 === 0
})

console.log(numerosPares) // Saída: [2, 4, 6]
