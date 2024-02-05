const persona = {
    nombre:'Carlos',
    apellido: 'Mendez',
    edad: 20,
    direccion:{
        calle: 'Lomas',
        numero: 20,
        colonia: 'Central'
    }
}

const { nombre, direccion,direccion:{ calle } } = persona
console.log(calle)
console.log(direccion)