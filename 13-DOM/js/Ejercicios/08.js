// De padre a hijo 
const card = document.querySelector('.card')
card.children[0].src = 'img/hospedaje2.jpg'

// De hijo al padre
const arribaCard = document.querySelector('.card')
arribaCard.parentElement.parentElement.children[0].textContent = 'Este es un nuevo titulo'

// Entre hermanos
const cardHerma = document.querySelector('.card')
cardHerma.nextElementSibling.children[1].children[0].textContent = 'Nuevo cambiado'
console.log(cardHerma.nextElementSibling.children[1].children[0].textContent)