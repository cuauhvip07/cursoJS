// Objetc Literal
const persona = {
    nombre:'Carlos',
    apellido: 'Mendez',
    edad: 20
}

// Agregar nuevas propiedades al objeto
persona.ciudad = 'CDMX'

console.log(persona)

// Eliminar una propiedad
delete persona.apellido
console.log(persona)