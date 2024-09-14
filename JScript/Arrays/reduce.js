/**
 * Reduce é usada para reduzir um Array a um único elemento
 * Some todos os números (reduce)
 * Retorne um array com os pares (filter)
 * Retorne um array com o dobro dos valores
 * 
 * reduce((acumulador, valor, indice, array) => {
 *  O parâmetro acc na função callback do map acumula o total.
 * })
*/

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 10 },
    { nome: 'Rosana', idade: 64 },
    { nome: 'Wallace', idade: 63 },
]

function totalArray() {
    // Some todos os números (reduce)
    const total = numeros.reduce((acc, val) => {
        acc += val
        return acc
    }, 0) // Se nenhum valor inicial for passado, o acumulador assume o primeiro item do array
    console.log(total, 'Some todos os números (reduce)')
}

function maisIdade() {
    // Retorne a pessoa mais velha
    const pessoaMaisVelha = pessoas.reduce((acc, value) => {
        return (acc.idade > value.idade)? acc : value
    })
    console.log(pessoaMaisVelha, 'Retorne a pessoa mais velha')
}

function multIdade() {
    // Retorne um array com o dobro dos valores
    const dobroIdade = pessoas.reduce((acc, value) => {
        acc.push(value.idade * 2)
        return acc
    }, [])
    console.log(dobroIdade, 'Retorne um array com o dobro dos valores')
}

function numPares() {
    // Retorne um array com os pares (filter)
    const idadePar = numeros.reduce((acc, value) => {
        if(value % 2 === 0) {
            acc.push(value)
        }
        return acc
    }, [])
    console.log(idadePar, 'Retorne um array com os pares (filter)')
}

multIdade()
numPares()
totalArray()
maisIdade()