// Eliminar elementos en un arreglo 

const carrito = []

const producto1 = {
    nombre: 'Celular',
    precio: 50,
    disponible: true
}

const producto2 = {
    nombre: 'Tablet',
    precio: 100,
    disponible: false
}

const producto3 = {
    nombre: 'Audifonos',
    precio: 150,
    disponible: false
}

const producto4 = {
    nombre: 'Raton',
    precio: 50,
    disponible: false
}

carrito.push(producto1)
carrito.push(producto2)
carrito.push(producto3)
carrito.push(producto4)
console.table(carrito)

// Eliminar de en medio
carrito.splice(1,1) // Posicion inicia a cortar, segundo num elementos a cortar
console.table(carrito)

// Eliminar ultimo elemento de un arreglo 

carrito.pop()
console.table(carrito)

// Eliminar al inicio del arreglo
carrito.shift()
console.table(carrito)