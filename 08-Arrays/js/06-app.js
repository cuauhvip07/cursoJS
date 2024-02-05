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

let resultado = [...carrito, producto1] // Se le agrega a una nueva variable
resultado = [...resultado,producto2] // Se agrega a la variable agregada

console.table(resultado)


