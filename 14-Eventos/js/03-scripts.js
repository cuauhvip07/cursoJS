// Eventos en los inputs

const busqueda = document.querySelector('.busqueda')
// busqueda.addEventListener('keydown', () => {
//     console.log('Escibiendo')
// })

// busqueda.addEventListener('keydup', () => {
//     console.log('Soltando la tecla')
// })

// busqueda.addEventListener('blur', () => {
//     console.log('Entras y sales de la casilla')
// })

// busqueda.addEventListener('copy', () => {
//     console.log('Se ha copiado el texto')
// })

busqueda.addEventListener('input', (e) => {
    if (e.target.value === ''){
        console.log('String vacio')
    }
    else{
        console.log('String con valor')
    }
})