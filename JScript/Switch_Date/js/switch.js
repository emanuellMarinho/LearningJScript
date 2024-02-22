const h1 = document.querySelector('.principal h1')
const data = new Date()

function getDiasSemanaTexto(diaSemana) {
    const diasSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    return diasSemana[diaSemana]
}

function getNomeMes(numeroMes) {
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    return meses[numeroMes]
}

function zeroEsquerda(num) {
    return num >= 10 ? num : `0${num}`
}

function criaData(data) {
    const diaSemana = data.getDay()
    const numeroMes = data.getMonth()

    const nomeDia = getDiasSemanaTexto(diaSemana)
    const nomeMes = getNomeMes(numeroMes)

    return (
        `${nomeDia}, ${data.getDate()} de ${nomeMes} de ${data.getFullYear()} ` +
        `${zeroEsquerda(data.getHours())}:${zeroEsquerda(data.getMinutes())}`
    )
}

h1.innerHTML = criaData(data)