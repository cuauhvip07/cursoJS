// find -> Crea un nuevo arreglo basado en la condicion que pongas
// SOLAMENTE retorna el primer elemento

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

const encontrado = carrito.find(producto => producto.nombre === 'Celular')
console.log(encontrado)