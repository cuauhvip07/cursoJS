// Traversing the DOM

const navegacion = document.querySelector('.navegacion')
console.log(navegacion.childNodes) // Los espacios en blanco del HTML son considerados elementos
console.log(navegacion.children[0]) // Los espacios en blanco NO son considerados
console.log(navegacion.children[0])
console.log(navegacion.firstElementChild) // Escoger el primer hijo
console.log(navegacion.lastElementChild) // Escoger el ultimo hijo


// Atraves del card
const card = document.querySelector('.card')
console.log(card.children[1].children[1].textContent)
card.children[1].children[1].textContent = 'Nuevo Heading desde Traversing the DOM'

// Cambiar la img
const img = document.querySelector('.card')
console.log(img.children[0])
img.children[0].src = 'img/hacer4.jpg'


// Traversing de hijo al padre
console.log(card.parentElement)

//Traversing de elementos hermanos
console.log(card.nextElementSibling)

// Traversing de elementos hermanos -> Un elemento antes
const ultimoCard = document.querySelector('.card:nth-child(4)')
console.log(ultimoCard.previousElementSibling)