

const encabezado = document.querySelector('.contenido-hero h1')
console.log(encabezado)

console.log(encabezado.innerText)
console.log(encabezado.innerHTML) // Te trae el HTML
console.log(encabezado.textContent) // Se observa con visibility

// Cambiar el texto
encabezado.textContent = 'Hola, desde JS. Este es el encabezado'

// Modificar una imagen 

const imagen = document.querySelector('.card img')
imagen.src = 'img/hacer2.jpg'

const titulo = document.querySelector('.card .info p:nth-child(2)')
titulo.textContent = 'Musica Reggaeton del Viejo'