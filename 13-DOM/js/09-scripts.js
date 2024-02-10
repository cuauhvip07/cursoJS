// Eliminar elementos

const primerEnlace = document.querySelector('a');
// primerEnlace.remove()    // Primera manera de eliminar

// Eliminar desde el padre
const navegacion = document.querySelector('.navegacion')
navegacion.removeChild(navegacion.children[2]) // Otra manera de eliminar