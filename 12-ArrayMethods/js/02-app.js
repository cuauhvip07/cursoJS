// .findIndex
// Conocer el indice de un elemento

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]
// .findIndex solamente retorna el primer elemento que encuntra

const indice = meses.findIndex(mes => mes === 'Abril')
console.log(`Encontrado en el indice ${indice}`)

const precio = carrito.findIndex(nom => nom.precio === 100)
console.log(`Encontrado en el indice ${precio}`)