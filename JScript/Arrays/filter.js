/* Filter não edita o Array original, é necessário criar outro Array para receber ele.
 * Filter -> sempre retorna um array com a mesma quantidade de elementos ou menos.
**/


// Retorne os números maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 8, 7, 11, 15, 22, 27]
const numerosFiltrados = numeros.filter(valor => valor > 10) // O método filter recebe uma função de callback

// function callbackFilter(valor, indice, array) {
//     return valor > 10
// }

// function callbackFilter(valor, indice, array) {
//     if(valor > 10) {
//         return true
//     }
//     return false
// }

// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com "A"
const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
]

const pessoasCinco = pessoas.filter(valor => valor.nome.length >= 5)
const pessoasMaisCinquenta = pessoas.filter(valor => valor.idade >= 50)
const pessoasTerminaEmA = pessoas.filter(valor => valor.nome.toLocaleLowerCase().endsWith('a')) // Encadeamento de funções

console.log(pessoasTerminaEmA)