/**
 * O funcionamento léxico, ou "lexical scoping", refere-se à forma como o JavaScript 
 * determina o escopo das variáveis. O escopo é o contexto onde uma variável está definida e acessível.
 * 
 * Quando o JavaScript encontra a variável options dentro da função createPeople, 
 * ele vê que há uma declaração de options dentro dessa função e usa essa versão local. 
 * A variável global options permanece intacta e inacessível dentro do escopo da função 
 * createPeople porque a versão local está sombreando a global.
*/

// Object
var options = {
    nome: "Emanuel",
    idade: 20
}

function createPeople() {
    const options = {
        nome: "Raquel",
        idade: 23
    }
    console.log(options.nome, options.idade)
}

createPeople()