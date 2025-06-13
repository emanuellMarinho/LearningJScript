function rand(min=1, max=3) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function connectDB(msg, time) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') {
            return reject(new Error('O dado inserido é diferente do tipo esperado'))
        }
        setTimeout(() => {
            resolve(msg);
        }, time);
    });
}

connectDB('Iniciando conexão', rand())
    .then(resposta => {
        console.log(resposta);
        console.log('Conexão estabelecida');
        return rand();
    })
    .then(resposta => {
        console.log(resposta);
        return connectDB(222, rand());
    })
    .catch(err => {
        console.error('ERROR:', err);
    });