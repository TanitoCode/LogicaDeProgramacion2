let titulo = document.querySelector('h1');
titulo.innerHTML = "Hora del Desafío";

function clickBoton(){
    console.log("El boton fue clickado");
}

function preguntaCiudad(){
    let ciudad = prompt("Nombra una ciudad de Argentina")
    alert(`Estuve en ${ciudad} y me acorde de ti`)
}

function alerta(){
    alert('Yo amo JS')
}

function suma(){
    let num1 = parseInt(prompt("Ingrese un numero"));
    let num2 = parseInt(prompt("Ingrese otro numero"));
    alert(`La suma de ${num1} mas el ${num2} es ${num1+num2}`)
}