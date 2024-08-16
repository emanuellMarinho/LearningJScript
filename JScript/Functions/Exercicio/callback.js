/**
 * Exercício 1: Função de Soma com Callback.
 * Crie uma função chamada somarComCallback que recebe dois números e um callback. 
 * A função deve somar os dois números e passar o resultado para o callback.
*/

function somarComCallback(a, b, callback) {
    let result = a + b
    callback(result)
}

somarComCallback(5, 5, (result) => {
    console.log(`O resultado é ${result}`)
})