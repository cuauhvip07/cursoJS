// Event Bubbling con Delegation

const card = document.querySelector('.card')
card.addEventListener('click', (e) => {
    if (e.target.classList.contains('titulo')){
        console.log('Diste click en titulo')
    }
})