
// Nivel de dificultad: bajo
// Ejercicio 1

let numUno = 4

let numDos = 5

if (numUno > numDos) {
    console.log("El numero uno es mayor que el numero dos")
} else {
    console.log("El numero dos es mayor que el numero uno")
}

// Ejercicio 2
let numeroUno = 5

let numeroDos = 4

if (numeroUno > numeroDos) {
    console.log("El numero uno es mayor que el numero dos")
} else if (numeroUno == numeroDos) {
    console.log("Los numeros son iguales");
}

// Ejercicio 3
let numero1 = 5

let numero2 = 5

if (numero1 == numero2) {
    console.log("Los numeros son iguales");
} else {
    console.log("Los numeros son diferentes")
}

// Ejercicio 4
let date1 = "2018-9-2"
let date2 = "2023-7-5"

if (date2 > date1) {
    console.log("La fecha dos es mayor a la fecha uno");
} else if (date2 == date1) {
    console.log("Las fechas son iguales");
} else {
    console.log("La fecha uno es mayor a fecha dos")
}

// Ejercicio 5
let dateUno = "2023-9-2"
let dateDos = "2023-7-5"

if (dateUno > dateDos) {
    console.log("La fecha uno es mayor a la fecha dos");
} else if (dateDos == dateUno) {
    console.log("Las fechas son iguales");
} else {
    console.log("La fecha dos es mayor a fecha uno")
}

// // Ejercicio 6
let numer1 = 5

let numer2 = 7

let numer3 = 9

if (numer1 > numer2 && numer1 > numer3) {
    console.log("El numero uno es el mayor")
}
if (numer2 > numer1 && numer2 > numer3) {
    console.log("El numero dos es el mayor")
}
if (numer3 > numer1 && numer3 > numer2) {
    console.log("El numero tres es el mayor")

    // // Nivel de dificultad: medio
    // // Ejercicio 1
    let operacion = prompt("Ingrese un color: Rojo, Azul, Verde, ")
    console.log(operacion);
    operacion = operacion.toUpperCase()

    switch (operacion) {
        case "ROJO":
            console.log("Rojo: El color de la pasion");
            break;

        case "AZUL":
            console.log("Azul: El color del mar");
            break;

        case "VERDE":
            console.log("Verde: El color de la naturaleza");
            break;

        default:
            console.log("Operacion n,o valida");
            break;
    }
    // // Ejercicio 2
    let operacion1 = prompt("Ingrese una operación: suma, resta, multiplicacion, division")
    let numer1 = Number(prompt("Ingrese el primer numero"))
    let numer2 = Number(prompt("Ingrese el segundo numero"))
    console.log(operacion1, numer1, numer2)
    operacion1 = operacion1.toUpperCase()
    switch (operacion1) {
        case "SUMA":
            console.log(`La suma de: ${numer1} mas ${numer2} es: ${numer1 + numer2} `)
            break;
        case "RESTA":
            console.log(`La resta de: ${numer1} menos ${numer2} es: ${numer1 - numer2} `)
            break;
        case "MULTIPLICACION":
            console.log(`La multiplicacion de: ${numer1} por ${numer2} es: ${numer1 * numer2} `)
            break;
        case "DIVISION":
            console.log(`La division de: ${numer1} dividido ${numer2} es: ${numer1 / numer2} `)
            break;

        default:
            console.log("Operación no válida")
            break;
    }
    // Ejercicio 3
    let persona1 = {
        nombre: "Juan",
        edad: 39,
        altura: 1.69
    }
    let persona2 = {
        nombre: "Rosa",
        edad: 25,
        altura: 1.80
    }

    if (persona1.edad > persona2.edad && persona1.altura > persona2.altura) {
        console.log(`${persona1.nombre}$ es mas alto y mayor que ${persona2.nombre}`)
    }
    if (persona1.edad < persona2.edad && persona1.altura < persona2.altura) {
        console.log(`${persona1.nombre} es mas bajo y menor que ${persona2.nombre}`)
    }
    if (persona1.edad > persona2.edad && persona1.altura < persona2.altura) {
        console.log(`${persona1.nombre} es mas alto pero menor que ${persona2.nombre}`)
    }
    if (persona1.edad < persona2.edad && persona1.altura > persona2.altura) {
        console.log(`${persona1.nombre} es mas bajo pero mayor que ${persona2.nombre}`)
    }

    // Ejercicio 4
    let operacion2 = prompt("Desea saber si esta habilitado para conducir: Ingrese true o false")
    let datoIngresado1 = prompt("Ingrese su Nombre")
    let datoIngresado2 = Number(prompt("Ingrese su edad"))
    let datoIngresado3 = Number(prompt("Ingrese su altura"))
    let datoIngresado4 = Number(prompt("Ingrese su vision"))
    console.log(operacion2, datoIngresado1, datoIngresado2, datoIngresado3, datoIngresado4)

    if (datoIngresado2 >= 18 && datoIngresado3 >= 110 && datoIngresado4 >= 8) {
        console.log("Estas Habilitado para conducir")

    } else { console.log("Lo, siento, no cumlpes con los requisitos") }


    //Ejercicio 5

    let edadIngresada = Number(prompt("Ingrese una edad"))
    console.log(edadIngresada)
    if (edadIngresada >= 0 && edadIngresada <= 12) {
        console.log("Infantil")
        alert("Infantil")
    } else if (edadIngresada >= 13 && edadIngresada <= 18) {
        console.log("Eres adolescente")
        alert("Adolescente")
    } else if (edadIngresada >= 19 && edadIngresada <= 45) {
        console.log("Eres un joven mayor")
        alert("Joven mayor")
    } else if (edadIngresada >= 45) {
        console.log("Eres una persona mayor")
        alert("Persona mayor")
    } else if (edadIngresada >= 100) {
        console.log("¿Realmente eres tan viejo? ")
        alert("¿Realmente eres tan viejo?")
    } else {
        console.log("Dato inválido")
    }

    //Ejercicio 6

    let numeroIngresado = Number(prompt("Ingrese un numero entre 1 y 3"))
    console.log(numeroIngresado)

    if (numeroIngresado >= 1 && numeroIngresado <= 3) {
        console.log(`El numero ingresado es: [${numeroIngresado}]`)
        alert(`El numero ingresado es: [${numeroIngresado}]`)
        alert(`El doble del numero ingresado es:[${numeroIngresado * 2}] `)
        alert(`El triple del numero ingresado es:[${numeroIngresado * 3}]`)
    } else {
        alert(`Ese valor no esta permitido`)
    }

// Nivel de dificultad: Alto
// // Ejercicio 1

let nombreIngresado = prompt("Ingrese su nombre y apellido")

if (nombreIngresado == "luz mieres") {
    alert("Su nombre se encuentra en la lista! ¡Bienvenido!")
} else {
    alert("Su nombre no esta en la lista!")
    let tienePase = prompt("¿Tiene pase?")
    if (tienePase == true) {
        alert("Bienvenido")
    } else {
        let tieneEntrada = prompt("¿Tiene Entrada?")
        if (tieneEntrada == true)
            alert("Binvenido")
        else {
            let precioEntrada = prompt("El precio de la entrada es $1000 ¿Desea comprar una?")
            } if (precioEntrada == true && precioEntrada >= 1000) {
                alert("¡Excelente! ¡Bienvenido!")
            } else if (precioEntrada < 1000){
                alert("Lo siento, en ese caso no podre venderle una entrada")
            } else {
                alert("Hasta luego, que tenga linda noche!")
            }
        }
    }
}

