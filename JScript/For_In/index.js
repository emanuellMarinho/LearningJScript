/**
 * Naturalmente, a forma mais convencional de usar o For seria:
 * for (let i = 0; i < frutas.length; i++) {
 *   console.log(frutas[i]);
 * }
 * 
 * For in -> lê os índices ou chaves do objeto
 * const frutas = ['Pera', 'Maçã', 'Uva']
 * for (let i in frutas) {
 *  console.log(frutas[i])
 * }
 */

// Objeto
const Pessoa = {
    nome: 'Emanuel',
    sobrenome: 'Marinho',
    idade: 19
}

for (let i in Pessoa) {
    console.log(Pessoa[i])
}
