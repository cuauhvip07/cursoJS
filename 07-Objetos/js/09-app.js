// Sellar un objeto 
// No se pueden añadir ni elimanar propieades pero si modificar

const usuario = {
    nombre:'Carlos',
    apellido: 'Mendez',
    edad: 20
}


Object.seal(usuario)
usuario.edad = 21 // Modificando
console.log(usuario)

console.log(Object.isSealed(usuario)) // Saber si esta sellado