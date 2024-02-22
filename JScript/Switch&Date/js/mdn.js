/*
* Forma de representar as horas no navegador, segundo o site MDN
*/

const h1 = document.querySelector('.principal h1')
const data = new Date();
h1.innerHTML = data.toLocaleDateString('pt-BR', { dateStyle: 'full' })