// .concat -> Unir arreglos

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
const meses2 = ['Agosto','Septiembre']
const meses3 = ['Octubre','Noviembre']

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 }]

// .concat
const meses4 = meses.concat(meses2,meses3,'Otro mes') // Une dos arreglos
console.log(meses4)

// Spreed Operator

const resultado = [...meses,...meses2,...meses3,'Otro mes',...carrito]
console.log(resultado)