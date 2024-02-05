// Object Literal
const usuario = {
    nombre:'Carlos',
    apellido: 'Mendez',
    edad: 20,
}

// Object Constructor

function Producto(nombre,precio){
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

const producto1 = new Producto('Monitor de 24 pulgadas',500)
console.log(producto1)

const producto2 = new Producto('Monitor de 20 pulgadas',100)
console.log(producto2)