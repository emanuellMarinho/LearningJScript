function mostraHora() {
    const data = new Date()
    return data.toLocaleTimeString("pt-BR", {
        hour12: false // Objeto
    })
}

// function funcaoDoIntervalo() {
//     console.log(mostraHora())
// }
//             referência da função
//                     |
// setInterval(funcaoDoIntervalo, 1000)
//                                 |
//                                tempo de execução em milissegundos


const timer = setInterval(function () {
    console.log(mostraHora())
}, 1000)

setTimeout(function() {
    clearInterval(timer)
}, 3000)