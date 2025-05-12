function CriaPessoa(nome, sobrenome, idade, altura) {
    // Atributos
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
    this.altura = altura;
}

// new -> cria um obj vazio {} <- this aponta para o obj que o chama
const newPessoa1 = new CriaPessoa('Emanuel', 'Marinho', 20, 178);
const newPessoa2 = new CriaPessoa('João', 'Paulo', 19, 177);
console.log(newPessoa1);

// Objeto literal
const pessoa = {
    nome: 'Emanuel',
    sobrenome: 'Marinho',
    idade: 20,
    altura: 178
};

// Construtor de um objeto
const pessoa1 = new Object();
pessoa1.nome = 'Emanuel';
pessoa1.sobrenome = 'Marinho';
pessoa1.idade = 20;
pessoa1.altura = 178;

// Acessando um objeto
console.log(newPessoa1.nome);
console.log(pessoa.sobrenome);
console.log(pessoa1['nome']);
