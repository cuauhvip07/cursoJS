// Generar HTML

const enlace = document.createElement('A'); // Creando en enlace
enlace.textContent = 'Nuevo Enlace' // Agregando el texto
enlace.href = '/nuevo-enlace'
enlace.target = '_blank'

// Seleccionar la navegacion
const navegacion = document.querySelector('.navegacion')
navegacion.appendChild(enlace)  // Lo coloca hasta el ultimo
navegacion.insertBefore(enlace,navegacion.children[1]) // Seleccionas donde se coloca


// Creando un card
const parrafo1 = document.createElement('P'); // Creando parrafo 1
parrafo1.textContent = 'Concierto'
parrafo1.classList.add('categoria','concierto')


const parrafo2 = document.createElement('P') // Creando parrafo 2
parrafo2.textContent = 'Rock en México'
parrafo2.classList.add('titulo')


const parrafo3 = document.createElement('P') // Creando parrafo 3
parrafo3.textContent = '$500 por cabeza'
parrafo3.classList.add('precio')

const info = document.createElement('DIV') // Creando div de info
info.classList.add('info')

// Juntando div info con los parrafos
info.appendChild(parrafo1)
info.appendChild(parrafo2)
info.appendChild(parrafo3)

// Creacion de la img
const imagen = document.querySelector('IMG')
imagen.src = 'img/hacer3.jpg'

// Creando card
const card = document.createElement('DIV')
card.classList.add('card')

// Juntando los elementos al card
card.appendChild(imagen)
card.appendChild(info)

// Añadiendolo a la pagina web
const contenedorCards = document.querySelector('.contenedor-cards')
// contenedorCards.appendChild(card)  // Opcion 1
contenedorCards.insertBefore(card,contenedorCards.children[1])



