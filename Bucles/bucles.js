//Nivel de dificultad: bajo
//Ejercicio 1
let numero = prompt ("Ingrese un numero del 1 al 100")
for (let i = numero; i >= 0; i--){
    console.log(i)
}

//Ejercicio 2

let numer = prompt ("Ingrese un numero del 1 al 10")
for (let i = 1; i <= 10; i++){
    console.log(`${i} x ${numer} = ${numer * i}`)
}   

//Ejercicio 3
let suma = 0
let numeros = 1
while (numeros != 0) {
    numeros = Number(prompt("Ingrese numeros y al finalizar ingrese 0"))
    suma += numeros
}   
console.log(suma); 

//Ejercicio 4
let sum = 0
let num = 1
do{
   num = Number(prompt("Ingrese numeros y al finalizar ingrese 0"))
   sum += num
}while ((num != 0))
console.log(sum)

//Ejercicio 5

let persona = {
    nombre: "Luz",
    apellido: "Mieres",
    edad: 26,
    origen: "Buenos Aires",
    estudios: "Secundarios"
}
for (let llave in persona) {
    console.log(llave)
}

//Ejercicio 6
let person = {
    nombre: "Luz",
    apellido: "Mieres",
    edad: 26,
    origen: "Buenos Aires",
    estudios: "Secundarios"
}
for (let llave in person) {
    console.log(person[llave])
}

//Nivel de dificultad: Medio
//Ejercicio 1
let numeroSecreto = sum
let contraseña
let contador = 0
do {
    contraseña= Number(prompt("Ingrese la contraseña secreta"))
    if(contraseña>numeroSecreto){
        contador += 1
        alert('El número es mayor a la contraseña')
    }else if(contraseña<numeroSecreto){
        contador += 1
        alert('El número es menor a la contraseña')
    }else {
        alert(`Has acertado el numero secreto era ${numeroSecreto} y has intentado ${contador} veces`)
        break;
    }

}while(contraseña != numeroSecreto)
    
//Ejercicio 2
let divisores = Number(prompt('Ingrese el numero a determinar divisores: '))

for(let i = 1; i<=divisores;i++){
    if(divisores%i==0){
        console.log(i)
    }
}

//Ejercicio 3 
function campana(tiempo){ 
    for (let i = 1; i <= tiempo; i++) {        
        console.log("Ding Dong");
    }
}
campana (5)

//Ejercicio 4
const dateLimit = '1997-8-3'
const dates = ["1984-18-2", "1998-3-2", "1973-15-7", "2024-31-10", "2081-1-9"]
for(date of dates){
    if(date > dateLimit){
        console.log(`greater ${date}`)
    }else if(date == dateLimit){
        console.log(`equal ${date}`)
    }
}

//Ejercicio 5 y 6
const colores = ['rojo','verde','azul','violeta','marón','negro']

function colorLista(lista){
    for(let color of lista){
        console.log(`° ${color}\n`)
    }
}

colorLista(colores)

//7
const numers = [1,2,3,4,5]

for(let numer of numers){
    console.log(`El numero es ${numer} y su doble es ${numer*2}\n`)
}

//8
const personas= [
    {
        nombre: 'ana',
        apellido: 'gonzalez',
        edad: 53,
        miembro: 'madre', 
    },
    {
        nombre: 'eusebio',
        apellido:'mieres',
        edad: 52,
        miembro: 'padre'
    },
    {
        nombre:'luz',
        apellido:'mieres',
        edad:26,
        miembro: 'hija'
    },
    {
        nombre:'marina',
        apellido:'mieres',
        edad:27,
        miembro: 'hija'
    }
]

for(const persona of personas){
    console.log(`Hola yo soy ${persona.nombre} ${persona.apellido} (${persona.miembro}) y tengo ${persona.edad} años.\n`)
}

//Nivel de dificultad: Alto
//Ejercicio 1
let sumpares = 0
let sumimpares = 0

let ban = true

do {
    let numerito = Number(prompt('Ingrese su valor: '))
    if(numerito != 0){
        if(numerito%2==0){
            sumpares += numerito
        }else {
            sumimpares += numerito
        }
    }else {
        ban = false
    }
}while(ban)

console.log(`Números pares: ${sumpares}\nNúmeros impares: ${sumimpares}`)

//Ejercicio 2 
const listado = [10,26,3,14,25,5,7,9,12,20]
let aux = listado[0]

for(let i=0; i< listado.length;i++){
    if(aux< listado[i]){
        aux = listado[i]
    }
}

console.log(aux)