function rand(min=1000, max=3000) {
    const num = Math.random() * (max - min) + min
    return Math.floor(num)
}

function functOne(callback) {
    setTimeout(() => {
        console.log('functOne')
        if (callback) callback()
    }, rand())
}

function functTwo(callback) {
    setTimeout(() => {
        console.log('functTwo')
        if (callback) callback()
    }, rand())
}

function functThree(callback) {
    setTimeout(() => {
        console.log('functThree')
        if (callback) callback()
    }, rand())
}

functOne(functOnecallback)

function functOnecallback() {
    functTwo(functTwocallback)
}

function functTwocallback() {
    functThree(functThreecallback)
}

function functThreecallback() {
    console.log('Funções concluídas')
}

/**
 * Existem pelo menos duas formas de criar funções de callback, contudo, a melhor forma é a representação acima.
*/

// Versão Árvore de Natal
// functOne(function(){
//     functTwo(function() {
//         functThree(function() {
//             console.log('Funções concluídas')
//         })
//     })
// })