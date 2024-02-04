// Concatenas dos strings

const producto = 'Monitor 20\''
const precio = '30 USD'

console.log(producto.concat(precio)) // Concatenacion
console.log(producto.concat('En descuento'))

// Otra manera de concatenacion 
console.log('El producto' + producto + 'tiene un precio de: ' + precio)

// Otra manera de concatenacion 
console.log(`El producto: ${producto} tiene un precio de ${precio}`)