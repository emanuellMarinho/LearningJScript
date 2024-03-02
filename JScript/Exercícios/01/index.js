/**
 * Escreva uma função que receba 2 números e retorne o maior deles
*/

// function numeroMaior(num1, num2) {
//     if (num1 > num2) {
//         console.log(num1)
//     } else {
//         console.log(num2)
//     }
// }
// numeroMaior(1,2)

// Código refatorado
const higherNumber = (x, y) =>  x > y ? x : y
console.log(higherNumber(1,2))