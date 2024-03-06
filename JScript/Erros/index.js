/**
 * try {
 *  É executado quando não há erros
 * } catch (e) {
 *  É executado quando há erros
 * } finally {
 *  Sempre será executado
 * }
 * 
 * throw = lançar
 * !var = quando o símbolo "!" está antes da variável, significa que é uma negação
 */

function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Erro de tipo')
    }

    if (!data) {
        data = new Date()
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    })
}

try {
    const data = new Date('01-01-1970 12:59:59')
    const hora = retornaHora(11)
    console.log(hora)
} catch (e) {
    // Trantando error
    console.log(e)
} finally {
    console.log('Sempre executado!')
}