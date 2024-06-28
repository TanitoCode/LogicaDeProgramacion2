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


/*
Desafíos 3:
Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.
Crea una función que calcule el valor del factorial de un número pasado como parámetro.
Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.
Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.
Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.}
*/

// function calcularImc(altura, peso) {
//     let imc = peso / ((altura / 100) * (altura / 100));
//     console.log(`El IMC es ${imc.toFixed(2)}`)
// }

// calcularImc(180, 85);

// function calcularFactorial(numero) {
//     let factorial = 1;
//     for (let i = 1; i <= numero; i++) {
//         factorial *= i;  // 1 * 1 = 1 / 1 * 2 = 2 / 2 * 3 = 6 / 6 * 4 = 24 / 24 * 5 = 120 / 120 * 6 = 720
//     }
//     console.log(`Êl factorial de ${numero} es ${factorial}`)
// }

// calcularFactorial(6);

// function calcularDolarArg(dolar){
//     let cotizacionDolar = 1330;
//     console.log(`El valor de ${dolar} dolares en pesos argentino es: ${dolar*cotizacionDolar}`)
// }

// calcularDolarArg(100);

// function calcularAreaPerimetroRectangulo(altura, anchura) {
//     if(isNaN(altura) || isNaN(anchura) || altura <= 0 || anchura <= 0){
//         return console.log("Los valores de altura y achura deben ser numeros positivos")
//     }
//     let area = altura*anchura;
//     let perimetro = altura*2 + anchura*2;

//     console.log(`El perimetro del rectangulo es ${perimetro} y su areas es ${area}`)
// }

// calcularAreaPerimetroRectangulo(5,8);

// function calcularAreaPerimetroCirculo(radio) {
//     const pi = 3.14;
//     let area = pi * radio ** 2; //Alternativa de Math.pow(radio,2)
//     let perimetro = (2*pi) * radio;

//     let elementoHTML = document.querySelector('#resultados');
//     elementoHTML.innerHTML = `El area del circulo es ${area.toFixed(2)} y su perimetro es ${perimetro.toFixed(2)}`
// }

// calcularAreaPerimetroCirculo(5)

// function calcularTablaMultiplicar(numero) {
//     //Creo el elemento p
//     const resultadoElement = document.createElement("p");
//     //
//     resultadoElement.textContent = `Tabla de multiplicar del ${numero}`

//     for (let i = 1; i <= 10; i++) {

//         const resultado = numero * i;
//         const lineaTabla = ` ${numero} * ${i} = ${numero*i}`;
//         resultadoElement.textContent += `\n${lineaTabla}`
//         // let elementoHTML = document.querySelector('#resultadoTabla');
//         // elementoHTML.innerHTML += `\n El numero ${numero} * ${i} = ${numero*i}`;
//         console.log(`El numero ${numero} * ${i} = ${numero*i}`)

//     }
//     return resultadoElement;
// }

// const tablaMultplicar = calcularTablaMultiplicar(5);
// document.body.appendChild(tablaMultplicar)


/**
 Desafíos
1- Crea una lista vacía llamada "listaGenerica".
2- Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
3- Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
4- Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
5- Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
6- Crea una función que calcule el promedio de los elementos en una lista de números.
7- Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
8- Crea una función que devuelva la suma de todos los elementos en una lista.
9- Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
10- Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
11- Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
 */

/*Ejercicio 1*/
let listaGenerica = [];

/*Ejercicio 2*/
let lenguajesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python']

/*Ejercicio 3*/
lenguajesDeProgramacion.push('Java', 'Ruby', 'GoLang');

/*Ejercicio 4*/
function mostrarLenguajes() {
    console.log(lenguajesDeProgramacion)
}

/*Ejercicio 5*/
function mostrarLenguajesOrdenInverso() {
    console.log(lenguajesDeProgramacion.reverse())
}

/*Ejercicio 6*/
function promedioNumeros(numeros) {
    let suma = 0;
    for (let i = 0; i < lista.length; i++) {
        suma += lista[i];
    }

    let promedio = suma / lista.length;
    return promedio
}

let lista = [5, 7, 8, 9, 10]
let promedioLista = promedioNumeros(lista);
console.log(promedioLista);

/*Ejercicio 7*/
function numeroGrandePequeño(lista) {
    let mayor = lista[0];
    let menor = lista[0];
    for (let i = 0; i < lista.length; i++) {
        if (mayor < lista[i] ) {

            mayor = lista[i]
        }

        if(menor > lista[i]){
            menor = lista[i]
        }

    }
    console.log(`El numero mayor es ${mayor}`)
    console.log(`El numero menor es ${menor}`)
}
numeroGrandePequeño(lista)

/*Ejercicio 8*/
function sumaNumeros(lista) {
    let suma = 0;
    for (let i = 0; i < lista.length; i++) {
        suma += lista[i];       
        
    }
    return console.log(`La suma de todos los numeros de una lista es : ${suma}`)
}

let nuevaLista = [5, 98 ,75 , 55, 21]
sumaNumeros(nuevaLista)

/*Ejercicio 9*/
function encontrarNumero(numero, lista) {
    let posicionLista = lista.indexOf(numero)
    if (posicionLista != -1){
        console.log(`El numero se encuentra en la posicion ${posicionLista} `)
    } else {
        console.log(`El numero no se encuentra en la lista`)
    }
}

let listaNumeros = [2, 6 ,9 ,8, 7 ,10]
encontrarNumero(10, listaNumeros);


/*Ejercicio 10*/
function sumarListas(lista1, lista2){
    let listasSumadas = lista1.map((num, index) => num + lista2[index]);
    console.log(listasSumadas)
}

let listaUno = [1, 2, 3];
let listaDos = [4, 5, 6];

sumarListas(listaUno, listaDos);

//Otro metodo

function agregarLista(lista1, lista2){
    //Verificamos que las listas tengan el mismo tamaño
    if(lista1.length !== lista2.length) {
        //En caso de que sean de diferentes tamaños se lanza un error y se corta el flujo del programa
        throw new Error("Las listas son de tamaños diferentes");
    }

    let resultado = [];

    for (let i = 0; i < lista1.length; i++) {
        resultado.push(lista1[i] + lista2[i]);
        
    }

    return console.log(`La suma de las dos listas es : ${resultado}`)
}

agregarLista(listaDos, listaUno)


/*Ejercicio 11*/
function listaAlCuadrado(lista) {
    let resultado = []
    for (let i = 0; i < lista.length; i++) {
        resultado.push(lista[i] * lista[i])
        
    }

    return console.log(resultado)
}

listaAlCuadrado(listaUno)