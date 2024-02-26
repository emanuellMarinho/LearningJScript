const olaMundo = document.querySelector('.container')

function helloWorld () {
    // Criar um elemento h1
    const heading = document.createElement('h1')

    // Definir o conteúdo do elemento como "Hello World"
    heading.textContent = 'Hello World'

    // Retornar o elemento criado
    return heading
}

// Adicionar o elemento h1 ao container
olaMundo.appendChild(helloWorld())