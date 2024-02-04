const producto = 'Monitor 20 pulgadas'

console.log(producto.replace('pulgadas','"'))  // Remplazar un texto por otro
console.log(producto.replace('Monitor','Monitor Curvo'))

console.log(producto.slice(0,3)) // Corta una cadena de texto

console.log(producto.substring(9,0)) //Mejor que slice

const nombre = 'Carlos'
console.log(nombre.charAt(0)) //Obtener una letra