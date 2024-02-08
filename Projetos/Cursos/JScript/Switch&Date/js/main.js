/*
* Estou com problemas para utilizar o "timeStyle: 'short'"
*/

const h1 = document.querySelector('.principal h1')
const data = new Date();
const opcoes = {
    dateStyle: 'full',
    // timeStyle: 'short'
}

h1.innerHTML = data.toLocaleDateString('pt-BR', opcoes)