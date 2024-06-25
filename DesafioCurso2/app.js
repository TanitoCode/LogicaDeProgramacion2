let titulo = document.querySelector('h1');
titulo.innerHTML = "Hora del Desafío";

function clickBoton() {
    console.log("El boton fue clickado");
}

function preguntaCiudad() {
    let ciudad = prompt("Nombra una ciudad de Argentina")
    alert(`Estuve en ${ciudad} y me acorde de ti`)
}

function alerta() {
    alert('Yo amo JS')
}

function suma() {
    let num1 = parseInt(prompt("Ingrese un numero"));
    let num2 = parseInt(prompt("Ingrese otro numero"));
    alert(`La suma de ${num1} mas el ${num2} es ${num1 + num2}`)
}

/*
Desafíos:
1-Crear una función que muestre "¡Hola, mundo!" en la consola.
2-Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
3-Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
4-Crear una función que reciba tres números como parámetros y devuelva su promedio.
5-Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
6-Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.
*/

// function holaMundo() {
//     console.log('Hola, mundo')
// }
// holaMundo();

// function recibeNombre(nombre) {
//     console.log(`Hola, ${nombre}`)
// }
// recibeNombre('Cristian');

// function numeroDoble(numero) {
//     let numDoble = numero*2;
//     return console.log(numDoble);
// }
// numeroDoble(7);

// function promedioNumeros(num1,num2,num3){
//     let promedio = (num1+num2+num3)/3;
//     return console.log(promedio);
// }
// promedioNumeros(50,90,85);

// function mayorMenor(num1,num2){
//     if(num1>num2){
//         console.log(num1);
//     }else{
//         console.log(num2);
//     }
// }
// mayorMenor(45,25);

// function numeroMultiplicado(numero) {
//     let resultado = numero*numero;
//    return console.log(resultado);
// }

// numeroMultiplicado(6);


