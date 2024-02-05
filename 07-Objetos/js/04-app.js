const persona = {
    nombre:'Carlos',
    apellido: 'Mendez',
    edad: 20
}

const nombre1 = persona.nombre
console.log(nombre1)

// Destructuring 
const {nombre,edad} = persona
console.log(nombre,edad)