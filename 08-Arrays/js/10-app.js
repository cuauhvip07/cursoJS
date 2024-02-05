// Diferencia entre map y forEach

const carrito = [
    {nombre: 'Monitor 20 pulgadas', precio: 20},
    {nombre: 'Monitor 22 pulgadas', precio: 30},
    {nombre: 'Monitor 24 pulgadas', precio: 40},
    {nombre: 'Monitor 26 pulgadas', precio: 50},
    {nombre: 'Monitor 28 pulgadas', precio: 60},
]

const prueba = carrito.map(function(pro){
    return `${pro.nombre} - $${pro.precio}`
})

const nuevoArreglo = carrito.map( pro => `${pro.nombre} - $${pro.precio}`) // map SI regresa un nuevo arreglo

const nuevoArreglo2 = carrito.forEach( pro => { // forEach NO regresa nuevo arreglo
    return `${pro.nombre} - $${pro.precio}`
})


console.log(nuevoArreglo)
console.log(nuevoArreglo2)