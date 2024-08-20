/**
 * constructor & factory return object
 * function constructor (new)
*/

function Pessoa(nome, sobrenome) {
    // Atributos ou métodos privados
    function metodoInterno() {
        // lógica da função
    }

    // Atributos ou métodos públicos
    this.nome = nome
    this.sobrenome = sobrenome

    this.metodo = function() {
        console.log(this.nome, this.sobrenome + ': sou um método!')
    }
}

const p1 = new Pessoa('Emanuel', 'Marinho')
// console.log(p1)
p1.metodo()