// Global
function returnFunction() {
    return function() {
        return nome
    }
}
/**
 * Aqui eu declaro uma constante(variável) para receber o valor da função.
 * Além de passar o parametro String dentro da função.
*/
const nameFunctionOne = returnFunction('Emanuel')
console.dir(returnFunction)