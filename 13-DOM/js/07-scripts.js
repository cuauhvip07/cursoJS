// Cambiar el CSS 

const encabezado = document.querySelector('h1')
encabezado.style.textTransform = 'uppercase'
encabezado.style.fontFamily = 'Arial'
encabezado.style.fontSize = 'Bold'

// Es recomendable que la apariencia se haga con CSS y solamente se agreguen o quiten clases.


const card = document.querySelector('.card')
card.classList.add('nueva-clase', 'segunda-clase') // Añadir una clase
card.classList.remove('segunda-clase') // Eliminar una clase
console.log(card.classList)