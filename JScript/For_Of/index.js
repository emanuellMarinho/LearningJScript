/**
 * For específico para objetos iteráveis, como: string, arrays
 * */


const nome = 'Emanuel'

// for (let i = 0; i < nomeDeus.length; i++) {
//     console.log(nomeDeus[i])
// }

for (let i in nome) {
    console.log(nome[i])
}