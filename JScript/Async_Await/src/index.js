function rand(min=1, max=3) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperai(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg !== 'string') {
                reject('cai no erro');
                return;
            }
            resolve(msg.toUpperCase() + 'Passei na promise');
            return;
        }, tempo);
    });
}