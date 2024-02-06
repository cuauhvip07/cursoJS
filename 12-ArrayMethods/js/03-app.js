// .reduce
// Te suma los datos que tengas dentro de un objeto

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// El ultimo es el valor con el que inicia
let resultado = carrito.reduce((total,producto) => total + producto.precio,0)
console.log(resultado)