const carrito = [
    {nombre: 'Monitor 20 pulgadas', precio: 20},
    {nombre: 'Monitor 22 pulgadas', precio: 30},
    {nombre: 'Monitor 24 pulgadas', precio: 40},
    {nombre: 'Monitor 26 pulgadas', precio: 50},
    {nombre: 'Monitor 28 pulgadas', precio: 60},
]

carrito.forEach(function(objeto){
    console.log(`${objeto.nombre} - $${objeto.precio}`)
})