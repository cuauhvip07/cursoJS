const usuario = {
    nombre:'Carlos',
    apellido: 'Mendez',
    edad: 20
}

const medidas = {
    peso: '1kg',
    medida: '1m'
}

console.log(medidas)
console.log(usuario)

const resultado = Object.assign(usuario,medidas)
console.log(resultado)

// Spreed Operator
const resultado2 = { ...usuario, ...medidas}
console.log(resultado2)