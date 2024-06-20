/**
 * Exercício com setInterval e setTimeout
 */

function relogio() {
    const relogio = document.querySelector('.relogio')

    // Essa função retorna a hora com base na data zero, no caso, às 00:00:00 de 01/01/1970.
    const criaHoraDosSegundos = (segundos) => {
        const data = new Date(segundos * 1000)
        return data.toLocaleTimeString("pt-BR", {
            // Objeto
            hour12: false,
            timeZone: 'UTC'
        })
    }

    // inicia os segundos
    let segundos = 0
    let timer

    // função para inciar os segundos
    function iniciaRelogio() {
        timer = setInterval(() => {
            segundos++
            relogio.innerHTML = criaHoraDosSegundos(segundos)
        }, 1000)
    }

    document.addEventListener('click', (e) => {
        const elemento = e.target

        if (elemento.classList.contains('iniciar')) {
            relogio.classList.remove('pausado')
            clearInterval(timer)
            iniciaRelogio()
        }

        if (elemento.classList.contains('pausar')) {
            clearInterval(timer)
            relogio.classList.add('pausado')
        }

        if (elemento.classList.contains('zerar')) {
            clearInterval(timer)
            relogio.innerHTML = '00:00:00'
            segundos = 0
            relogio.classList.remove('pausado')
        }

    })

    // Essa forma de selecionar os cliques não é performática. Se houvesse 100 botões, seria necessário definir os 100 com base no exemplo abaixo:
    // iniciar.addEventListener('click', function (event) {
    //     relogio.classList.remove('pausado')
    //     clearInterval(timer)
    //     iniciaRelogio()
    // })

    // pausar.addEventListener('click', function (event) {
    //     clearInterval(timer)
    //     relogio.classList.add('pausado')
    // })

    // zerar.addEventListener('click', function (event) {
    //     clearInterval(timer)
    //     relogio.innerHTML = '00:00:00'
    //     segundos = 0
    //     relogio.classList.remove('pausado')
    // })
}

relogio()