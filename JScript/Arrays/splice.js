/**
 * O que o Splice faz?
 * O método `splice` altera o conteúdo de um array, removendo ou adicionando elementos.
 * Ele pode realizar ações semelhantes às funções abaixo:
 * - `pop`: remove o último elemento do array
 * - `push`: adiciona um ou mais elementos no final do array
 * - `shift`: remove o primeiro elemento do array
 * - `unshift`: adiciona um ou mais elementos no início do array
 */

// const array = [indice, delete, elemento1, elemento2]

//                 0         1          2           3         4        5
const nomes = ['Emanuel', 'Felipe', 'Danilton', 'Gabriel', 'Jonas', 'Erik']
//                -6        -5         -4          -3        -2       -1

// Splice retorna um array
// const removidos = nomes.splice(4, 1) // -> o indece onde está presente o "1" indica quantos elementos eu quero remover do Array
const removidos = nomes.splice(0, 6)
console.log(nomes, removidos)

// dps faço uns exercícios aqui