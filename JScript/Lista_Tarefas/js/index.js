// Seleciona elementos do DOM
const inputTarefa = document.querySelector('.input-tarefa')
const btnTarefa = document.querySelector('.btn-tarefa')
const tarefas = document.querySelector('.tarefas')

// Função para criar um elemento <li>
function criaLi() {
    const li = document.createElement('li')
    return li
}

// Função para limpar o campo de input e focar nele
function limpaInput() {
    inputTarefa.value = ''
    inputTarefa.focus()
}

// Função para criar o botão "Apagar" e adicioná-lo ao <li>
function criaBotaoApagar(li) {
    li.innerText += ' '
    const botaoApagar = document.createElement('button')
    botaoApagar.innerText = 'Apagar'
    botaoApagar.setAttribute('class', 'apagar')
    botaoApagar.setAttribute('title', 'Apagar esta tarefa')
    li.appendChild(botaoApagar)
}

// Função para criar uma nova tarefa
function criaTarefa(textoInput) {
    const li = criaLi()
    li.innerText = textoInput
    tarefas.appendChild(li)
    limpaInput()
    criaBotaoApagar(li)
    salvarTarefas()
}

// Evento para adicionar tarefa ao pressionar Enter
inputTarefa.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        if (!inputTarefa.value) return
        criaTarefa(inputTarefa.value)
    }
})

// Evento para adicionar tarefa ao clicar no botão
btnTarefa.addEventListener('click', function () {
    if (!inputTarefa.value) return
    criaTarefa(inputTarefa.value)
})

// Evento para apagar tarefa ao clicar no botão "Apagar"
document.addEventListener('click', function (e) {
    const el = e.target

    if (el.classList.contains('apagar')) {
        el.parentElement.remove()
        salvarTarefas()
    }
})

// Função para salvar tarefas no localStorage
function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li')
    const listaDeTarefas = []

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim()
        listaDeTarefas.push(tarefaTexto)
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas)
    localStorage.setItem('tarefas', tarefasJSON)
}

// Função para adicionar tarefas salvas do localStorage ao carregar a página
function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas')
    const listaDeTarefas = JSON.parse(tarefas)

    for (let tarefa of listaDeTarefas) {
        criaTarefa(tarefa)
    }
}

// Chama a função para adicionar tarefas salvas ao carregar a página
adicionaTarefasSalvas()