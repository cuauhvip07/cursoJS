// Congelar un objeto

"use strict"; // Se debe de agregar el modo estricto 

const usuario = {
    nombre:'Carlos',
    apellido: 'Mendez',
    edad: 20
}

Object.freeze(usuario) // Congelando al objeto

usuario.direccion = 'Calle' // Ya no se puede agreagar un objeto
console.log(usuario)

console.log(Object.isFrozen(usuario)) // Saber si esta congelado