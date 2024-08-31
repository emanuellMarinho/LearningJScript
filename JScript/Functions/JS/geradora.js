/**
 * Gera um iterador com valores produzidos sob demanda. 
 * `yield` retorna um valor e pausa a execução. 
 * `yield*` delega a iteração a outro gerador ou iterável.
 */

function* geradora1() {
    yield 'valor 1'
    yield 'valor 2'
    yield 'valor 3'
}

function* geradora2() {
    let i = 0

    while (true) {
        yield i
        i++
    }
}

function* geradora3() {
    yield 0
    yield 1
    yield 2
}

function* geradora4() {
    yield* geradora3()
    yield 3
    yield 4
    yield 5
}

// const g4 = geradora4()
// console.log(g4.next())

function* geradora5() {
    yield () => {
        console.log('Vim do y1')
    }
    yield () => {
        console.log('Vim do y2')
    }
}

const g5 = geradora5()
const func1 = g5.next().value
const func2 = g5.next().value

func1()
func2()

// console.log(geradora1().next().value)