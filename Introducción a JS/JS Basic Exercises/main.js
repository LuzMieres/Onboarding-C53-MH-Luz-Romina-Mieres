// Ejercicio 1
let myName = ("Luz")
console.log (myName)

// Ejercicio 2
let lastName = ("mieres")
console.log (lastName)

// Ejercicio 3
let myAge = (26)
console.log (myAge)

// Ejercicio 4
let myPet = ("Perlita")
console.log (myPet)

// Ejercicio 5
let petAge = (2)
console.log (petAge)

// Ejercicio 6
let fullName = `${myName} ${lastName}`
console.log (fullName)

// Ejercicio 7
let presentationText = `Hola soy ${myName} ${lastName}
 tengo ${myAge} años y una perra llamada
  ${myPet} de ${petAge} años de edad `
console.log (presentationText)

// Nivel Medio
// Ejercicio 1
let sumAges = (myAge + petAge)
console.log (sumAges)
let resAges = (myAge - petAge)
console.log (resAges)
let productAges = (myAge * petAge)
console.log (productAges)
let divisionAges = (myAge / petAge)
console.log (divisionAges)

// Ejercicio 2
let alumno = {
    name: "Luz",
    lastName: "Mieres",
    age: 26,
    country: "Argentina",
    hobbie: "spinnig",
}
console.table (alumno)
console.log (`${alumno.name} 
${alumno.lastName} 
${alumno.age} 
${alumno.country} 
${alumno.hobbie}`)

// Ejercicio 3
let pet = {
    name: "Perlita",
    lastName: "Mieres",
    age: 2,
    raza: "caniche",
    color: "blanco",
}
console.table (pet)
console.log (`${pet.name} 
${pet.lastName} 
${pet.age} 
${pet.raza} 
${pet.color}`)

// Ejercicio 4
let frutas = [
    "Manzana",
    "Banana",
    "Pera",
    "Frutilla",
    "Kiwi",
]
console.log (frutas [0], 
    frutas [1], 
    frutas [2], 
    frutas [3], 
    frutas [4])

// Nivel Alto
// Ejercicio 1
let datoIngresado = prompt ("Ingrese su edad");
let lamAdult = datoIngresado; 
if (datoIngresado >= 18) {
    console.log (`soy un adulto de ${lamAdult} años`);
} 
else (datoIngresado < 18);
    console.log (`aun no soy un adulto ya que tengo ${lamAdult} años`);

// Ejercicio 2
let number = [
    1,
    2,
    3,
    4,
    5,
]
console.log (number [0], 
    number [1], 
    number [2], 
    number [3], 
    number [4])  

// Ejercicio 3
let family = [
    "Mom",
    "Dad",
    "Sister",
    "Brother",
    "Grandma",
]
console.log (family [0], 
    family [1], 
    family [2], 
    family [3], 
    family [4])  
// Ejercicio 4
let familyDescription = [
    {
       momName: "Ramona Analia Gonzalez",
       momAge: 57, 
    },
    {
        dadName: "Eusebio Mieres",
        dadAge: 55,
    },
    {
        sisterName: "Marina Alejandra Mieres",
        sisterAge: 27,
    },
    {
        brotherName: "Diego Alberto Mieres",
        brotherAge: 22,
    },
    {
        grandmaName: "Rosa Zandalazini",
        grandmaAge: 78,
    }
         
    ]

let randomText = `${frutas [1]} ${number[3]} ${ familyDescription [4].grandmaName}`
    console.log (randomText)

 







