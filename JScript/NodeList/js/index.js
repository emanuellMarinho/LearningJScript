/**
 * Embora a NodeList se comporte de maneira semelhante a um Array, ela não é um.
 */

const paragrafos = document.querySelector('.paragrafos')
const ps = paragrafos.querySelectorAll('p')

const estiloBody = getComputedStyle(document.body)
const backgroundColorBody = estiloBody.backgroundColor

for (let p of ps) {
    p.style.backgroundColor = backgroundColorBody
    p.style.color = '#FFFFFF'
}


/**
 * Minha solução
 * function changeColor() {
 * document.body.style.backgroundColor = 'rgb(17, 86, 102)'
 * }
 * 
 * changeColor()
 * -------------------------------------------------------------- 
 * document.body.style.backgroundColor = 'rgb(17, 86, 102)'
 *  ↑         ↑            ↑           ↑           ↑
 *  |         |            |           |           |
 * Objeto     Propriedade  |         Valor da     Valor do CSS
 * DOM        de estilo    |         propriedade  
 *                         |
 *                        Propriedade
 *                        CSS (backgroundColor)
 * */