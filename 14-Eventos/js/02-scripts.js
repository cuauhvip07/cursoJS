// Eventos del mouse

const nav = document.querySelector('.navegacion')

// Registrar un evento 
nav.addEventListener('click', () => {
    console.log('Click en nav')
})

nav.addEventListener('mouseenter', () => {
    console.log('Entrando a la navegacion')
    nav.style.backgroundColor = 'white'
})

nav.addEventListener('mouseout', () => {
    console.log('Saliendo de la navegacion')
    nav.style.backgroundColor = 'transparent'
})

nav.addEventListener('mouseup', () => {
    console.log('Levantando el dedo del click')
})

nav.addEventListener('dbclick', () => {
    console.log('Dando doble click')
})

