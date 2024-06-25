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

function calcularImc(altura, peso) {
    let imc = peso / ((altura / 100) * (altura / 100));
    console.log(`El IMC es ${imc.toFixed(2)}`)
}

calcularImc(180, 85);

function calcularFactorial(numero) {
    let factorial = 1;
    for (let i = 1; i <= numero; i++) {
        factorial *= i;  // 1 * 1 = 1 / 1 * 2 = 2 / 2 * 3 = 6 / 6 * 4 = 24 / 24 * 5 = 120 / 120 * 6 = 720
    }
    console.log(`Êl factorial de ${numero} es ${factorial}`)
}

calcularFactorial(6);

function calcularDolarArg(dolar){
    let cotizacionDolar = 1330;
    console.log(`El valor de ${dolar} dolares en pesos argentino es: ${dolar*cotizacionDolar}`)
}

calcularDolarArg(100);

function calcularAreaPerimetroRectangulo(altura, anchura) {
    if(isNaN(altura) || isNaN(anchura) || altura <= 0 || anchura <= 0){
        return console.log("Los valores de altura y achura deben ser numeros positivos")
    }
    let area = altura*anchura;
    let perimetro = altura*2 + anchura*2;

    console.log(`El perimetro del rectangulo es ${perimetro} y su areas es ${area}`)
}

calcularAreaPerimetroRectangulo(5,8);

function calcularAreaPerimetroCirculo(radio) {
    const pi = 3.14;
    let area = pi * radio ** 2; //Alternativa de Math.pow(radio,2)
    let perimetro = (2*pi) * radio;

    let elementoHTML = document.querySelector('#resultados');
    elementoHTML.innerHTML = `El area del circulo es ${area.toFixed(2)} y su perimetro es ${perimetro.toFixed(2)}`
}

calcularAreaPerimetroCirculo(5)

function calcularTablaMultiplicar(numero) {
    //Creo el elemento p
    const resultadoElement = document.createElement("p");
    //
    resultadoElement.textContent = `Tabla de multiplicar del ${numero}`

    for (let i = 1; i <= 10; i++) {

        const resultado = numero * i;
        const lineaTabla = ` ${numero} * ${i} = ${numero*i}`;
        resultadoElement.textContent += `\n${lineaTabla}`
        // let elementoHTML = document.querySelector('#resultadoTabla');
        // elementoHTML.innerHTML += `\n El numero ${numero} * ${i} = ${numero*i}`;
        console.log(`El numero ${numero} * ${i} = ${numero*i}`)
      
    }
    return resultadoElement;
}

const tablaMultplicar = calcularTablaMultiplicar(5);
document.body.appendChild(tablaMultplicar)