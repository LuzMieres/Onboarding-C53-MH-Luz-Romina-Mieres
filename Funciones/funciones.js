//Nivel de dificultad: Bajo
//Ejercicio 1, 2, 3, 4, 5
function multiplicar( parametro, parametroDos  ){
    let suma = parametro * parametroDos  
    return multiplicar
}
let resultadoUno = multiplicar( 100, 20 )

//Ejercicio 6
let numero1 = 100
let numero2 = 20
let  fnMultiplicacion = function( numero1, numero2  ){
    return numero1 * numero2
}
console.log( fnMultiplicacion( numero1, numero2 ) )

//Nivel de dificultad: Medio
//Ejercicio 1
let nombre1 = "Hola "
let nombre2 = "Luz"
let saludar = function (nombre1, nombre2){
    return nombre1 + nombre2
}
console.log(saludar (nombre1, nombre2))

//Ejercicio 2
let numeroUno = 10
let numeroDos = 10
let fnmultiplicacion = function (numero1, numero2){
    return numero1 * numero2
}
console.log(fnmultiplicacion(numero1, numero2))

//Ejercicio 3
let base=10
let altura=20
let areaTriangulo = function (base, altura){
    return base * altura / 2
}
console.log (areaTriangulo(base, altura))

//Ejercicio 4
let lado1 = 10
let lado2 = 10
let lado3 = 10
let perimetroTriangulo = function(lado1, lado2, lado3){
    return lado1 + lado2 + lado3
}
console.log(perimetroTriangulo(lado1, lado2, lado3))

//Ejercicio 5
function totalCompra(precio, cantidad) {
    let total
    
    if (cantidad >= 20) {
        total = ((cantidad*precio) - (cantidad*precio)* (20/100))
        console.log(`La compra con descuento del 20 % queda en ${total}`);
        return total
    } else if (cantidad >= 10) {
        total = ((cantidad*precio) - (cantidad*precio)* (10/100))
        console.log (`La compra con descuento del 10 % queda en ${total}`);
        return total
    } else {
        total = cantidad * precio
        console.log(`La compra sin descuentos aplicados queda en ${total}`);
        return total
    }
}    
    totalCompra(2000, 9)

//Ejercicio 6
function soyUnAdulto(){
    let edad = 17
    if (edad >= 18){
    console.log(`Eres un Adulto ${edad}`)
    return edad
    }else if(edad < 18){
        console.log(`No eres un Adulto ${edad}`)
        return edad
    }
}
soyUnAdulto ()

//Nivel de dificultad: Alto
//Ejercicio 1
function impuestos (ingresoAnual) {
    let porcentaje
    
    if (ingresoAnual <= 10000) {
        porcentaje = ((ingresoAnual)* (10/100))
        console.log(`El impuesto a pagar segun su ingreso anual es: ${porcentaje}`);
        return porcentaje
    } else if (ingresoAnual <= 20000) {
        porcentaje = ((ingresoAnual)* (15/100))
        console.log(`El impuesto a pagar segun su ingreso anual es: ${porcentaje}`);
        return porcentaje
    } else if (ingresoAnual > 20000) {
        porcentaje = ((ingresoAnual)* (20/100))
        console.log(`El impuesto a pagar segun su ingreso anual es: ${porcentaje}`);
        return porcentaje
    }
}    
    impuestos(10000)

//Ejercicio 2
function semana (dia){
    if (dia >= 1 && dia <= 5){
        console.log(`Es un dia habil`)
        return dia
    }else if  (dia <= 7){
        console.log(`Es fin de semana`)
        return dia
        }  
}
semana (5)  
   
//Ejercicio 3
function infoPersonal (nombre, apellido, edad){
    
    if (typeof nombre != "string" || nombre.length == 0){
        console.log("El nombre no puede estar vacío")
        return
        
    } if (typeof apellido != "string" || apellido.length == 0){
        console.log ("El apellido no puede estar vacío")
        return
    const edad = parseInt ("29")
    } if( isNaN (edad) || edad <= 0){
        console.log("Ingrese una edad válida")
        return 
    }
    const persona = {
        nombre: nombre,
        apellido: apellido,
        edad: edad
    }
    console.log(persona)

}
let nombre = prompt ("Ingrese su nombre")
let apellido = prompt ("Ingrese su apellido")
let edad = prompt ("Ingrese su edad")
infoPersonal (nombre, apellido, edad)

//Ejercicio 4
function saludo (nombre){
    return `Hola mi nombre es ${nombre}`
}

function calcularEdad (añoNacimiento, añoActual){
    return añoActual - añoNacimiento
}

function presentarse (){
    const nombreIngresado = prompt ("Ingrese su nombre completo")
    const añoNacimientoIngresado = prompt ("Ingrese su año de nacimiento")
    const añoActual = new Date().getFullYear()
    alert (`${saludo (nombreIngresado)} y tengo ${calcularEdad (añoNacimientoIngresado, añoActual)} años`)
}
presentarse ()