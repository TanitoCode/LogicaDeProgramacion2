let numeroSecreto = 0;
let intentos = 0;


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}


function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);


    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el número ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`)
        document.getElementById('reiniciar').removeAttribute('disabled')
       
        //console.log(intentos)
    } else {
        //El usuario no acerto
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es menor')
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor')

        }
        intentos++;
        limpiarCaja();
    }
    //console.log(numeroDeUsuario === numeroSecreto);
    // console.log(typeof(numeroDeUsuario))
    //console.log(numeroSecreto);
    // console.log(typeof(numeroSecreto))
    // console.log(numeroDeUsuario);
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';

}

function generarNumeroSecreto() {
    return Math.floor(Math.random() * 10) + 1;

}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número Secreto');
    asignarTextoElemento('p', 'Indica un número del 1 al 10')
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //Limpiar juego
    limpiarCaja();
    //Indicar mensaje de intervalo de numeros
    //Generar numero aleatorio
    //inicializar el numero de intentos
    condicionesIniciales();
   //Deshabilitar el boton de nuevo juego
   document.getElementById('reiniciar').setAttribute('disabled', 'true');
}

// function generarNumeroAleatorio(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   }

//   let numeroAleatorio = generarNumeroAleatorio(1, 100);
//   console.log("El número aleatorio generado es:", numeroAleatorio);

condicionesIniciales();
