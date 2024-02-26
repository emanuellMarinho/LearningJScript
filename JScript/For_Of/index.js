/**
 * For clássico - geralmente usado com iteráveis (arrays ou strings)
 * For in - retorna o índice ou chave (string, array ou objeto)
 * ForOf - retorna o valor em si (iteráveis, arrays ou strings)
 * */

const nome = 'Emanuel'

for (let i in nome) {
    console.log(nome[i])
}