const button = document.createElement('button');
button.textContent = 'Mudar Cor'; // Adicione um texto ao botão

const background = document.querySelector('h1');

function changeColor() {
    // Altere a cor de fundo do elemento background para vermelho
    background.style.backgroundColor = 'red';
}

// Associe a função changeColor ao evento de clique do botão
button.addEventListener('click', changeColor);

// Adicione o botão à .container (ou ao local desejado)
document.querySelector('.container').appendChild(button);