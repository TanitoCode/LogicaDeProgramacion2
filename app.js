let numeroSecreto = generarNumeroSecreto();



function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}


function verficarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    console.log(typeof(numeroDeUsuario))
    console.log(numeroSecreto);
    console.log(typeof(numeroSecreto))
    console.log(numeroDeUsuario);
    console.log(numeroDeUsuario === numeroSecreto);

    return;
}

function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;
    
}

asignarTextoElemento('h1', 'Juego del número Secreto');
asignarTextoElemento('p', 'Indica un número del 1 al 10')

