/**
 * Escreva uma função que recebe um número e
 * retorna o seguinte:
 * - Se o número é divisível por 3, retorna "Fizz"
 * - Se o número é divisível por 5, retorna "Buzz"
 * - Se o número é divisível por 3 e 5, retorna "FizzBuzz"
 * - Se o número NÃO é divisível por 3 e 5, retorna o próprio número
 * - Verifica se o argumento é realmente um número
 * - Use a função com números de 0 a 100
 */

/**
 * @type {number}
 */

const fizzBuzz = (num) => {
    if (num % 3 === 0 && num % 5 === 0) return 'FizzBuzz'
    if (num % 3 === 0) return 'Fizz'
    if (num % 5 === 0) return 'Buzz'
    return num
}

for (let i = 0; i <= 100; i++) {
    console.log(i, fizzBuzz(i))
}