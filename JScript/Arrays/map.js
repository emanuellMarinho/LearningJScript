/**
 * Map retorna um novo array do mesmo tamanho que o original, com os valores alterados de acordo com a função fornecida.
 * 
 * OBS: Tomar cuidado quando mexer em valores que se passam por referência.
*/


// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto
const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
]

// 1
// const nomes = pessoas.map(obj => obj.nome)

// 2
// const idades = pessoas.map(obj => {
//     delete obj.nome
//     return obj
// })

// const idades = pessoas.map(obj =>{
//     return { idade: obj.idade } // Retorno um objeto novo contendo a chave idade
// })

// const idades = pessoas.map(obj => ({ idade: obj.idade })) // Quando envolvido entre "()", se torna um expressão

// 3
// const comIds = pessoas.map((obj, index) => {
//     obj.index = (index + 1) * 1000 // Aqui está sendo mexido no obj original, mas a depender do caso o ideal é criar um novo obj e fazer as alterações nessa cópia
//     return obj
// })

const comIds = pessoas.map((obj, index) => {
    const newObj = { ...obj }
    newObj.index = (index + 1) * 1000
    return newObj
})

console.log(comIds)
console.log(pessoas)