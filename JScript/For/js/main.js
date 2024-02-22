const elementos = [
    {tag: 'p', texto: 'Frase 1'}, // 0
    {tag: 'div', texto: 'Frase 2'}, // 1
    {tag: 'footer', texto: 'Frase 3'}, // 2
    {tag: 'section', texto: 'Frase 4'}, // 3
]

const container = document.querySelector('.container')
const div = document.createElement('div')

for (let i = 0; i < elementos.length; i++) {
    let { tag, texto } = elementos[i]
    let tagCriada = document.createElement(tag)
    let textoCriado = document.createTextNode(texto)

    tagCriada.appendChild(textoCriado)
    div.appendChild(tagCriada)
}

container.appendChild(div)

/**
 * // Aqui estamos selecionando um elemento HTML existente na página com a classe "container"
 * const container = document.querySelector('.container');
 * 
 * // Aqui estamos criando um novo elemento <div> usando JavaScript
 * const div = document.createElement('div');
 * 
 * // Este é um loop que percorre todos os elementos no array 'elementos'
 * for (let i = 0; i < elementos.length; i++) {
 *     // Aqui estamos desestruturando o objeto atual do array 'elementos'
 *     // para extrair as propriedades 'tag' e 'texto'
 *     let { tag, texto } = elementos[i];
 * 
 *     // Aqui estamos criando um novo elemento HTML com base no valor da propriedade 'tag'
 *     let tagCriada = document.createElement(tag);
 * 
 *     // Aqui estamos criando um novo nó de texto com base no valor da propriedade 'texto'
 *     let textoCriado = document.createTextNode(texto);
 * 
 *     // Aqui estamos anexando o nó de texto ao elemento criado anteriormente
 *     tagCriada.appendChild(textoCriado);
 * 
 *     // Aqui estamos anexando o elemento criado anteriormente ao elemento <div> criado anteriormente
 *     div.appendChild(tagCriada);
 * }
 * 
 * // Aqui estamos adicionando a <div> criada, que contém todos os elementos filhos,
 * // ao elemento com a classe "container" na página HTML
 * container.appendChild(div);
 */