const meses = ['Enero','Febrero','Marzo']

meses.push('Abril') // Ponerlo hasta el ultimo
meses.unshift('Mes antes') // Ponerlo hasta el inicio 

console.table(meses)

const producto1 = {
    nombre: 'Celular',
    precio: 50,
    disponible: true
}

const productos = []
productos.push(producto1)

const producto2 = {
    nombre: 'Tablet',
    precio: 100,
    disponible: false
}

productos.push(producto2)

console.table(productos)


