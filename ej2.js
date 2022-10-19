const numerosAleatorios = []; 

for (let index = 0; index < 10000; index++){
    const numerosAleatorio = Math.ceil(Math.random() * 20);
    numerosAleatorios.push(numerosAleatorio);

    
}

console.log(numerosAleatorios)