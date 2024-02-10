// Event Bubbling

const card = document.querySelector('.card')
const info = document.querySelector('.info')
const titulo = document.querySelector('.titulo')

card.addEventListener('click',() =>{
    console.log('Click en card')
})

info.addEventListener('click',() => {
    console.log('Click en info')
})

titulo.addEventListener('click', () => {
    console.log('Click en titulo')
})