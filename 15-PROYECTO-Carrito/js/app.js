const carrito = document.querySelector('#carrito')
const listaCursos = document.querySelector('#lista-cursos')
const contenedorCarrito = document.querySelector('#lista-carrito tbody')
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito')
let articulosCarrito = []

cargarEventListener() 
function cargarEventListener(){
    listaCursos.addEventListener('click',agregarCurso) // Agregar un curso
    carrito.addEventListener('click',eliminarCurso) // Eliminar un curso
    vaciarCarritoBtn.addEventListener('click',() => {  // Vaciar el HTML
        articulosCarrito = []
        limpiarHTML()
    }) 
}
// Funciones

function agregarCurso(e){
    e.preventDefault()
    if(e.target.classList.contains('agregar-carrito')){
        const cursoSeleccionado = e.target.parentElement.parentElement
        leerDatosCurso(cursoSeleccionado)
    }
}

function eliminarCurso(e){ // Funcion de eliminar curso
    if(e.target.classList.contains('borrar-curso')){
        const cursoId = e.target.getAttribute('data-id')

        // Elimina del arreglo de articulosCarrito por el data-id
        articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId)
        carritoHTML() // Iterar sobre el carrito 

    }
}

function leerDatosCurso(curso){

    // Crear un objeto con el contenido del curso actual 
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    // Revisa si un elemento ya existe en el carrito
    const existe = articulosCarrito.some(curso => curso.id === infoCurso.id)
    if(existe){
        // Actualizamos la cantidad
        const cursos = articulosCarrito.map(curso => {
            if(curso.id === infoCurso.id){
                curso.cantidad ++
                return curso
            }
            else{
                return curso
            }
        })
        articulosCarrito = [...cursos]
    }
    else{
        // Agrega elementos al arreglo carrito
        articulosCarrito = [...articulosCarrito, infoCurso]
    }

    
    
    carritoHTML()
    
}

// Muestra el carrito de compras en el HTML
function carritoHTML(){

    // Limpiar el html
    limpiarHTML()

    // Recorre el carrito y crea el html
    articulosCarrito.forEach(curso => {
        const {imagen,titulo,precio,cantidad,id} = curso
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img src="${imagen}" width="100"></td>
            <td>${titulo}</td>
            <td>${precio}</td>
            <td>${cantidad}</td>
            <td><a href="#" class="borrar-curso" data-id="${id}"> X </td>
        `;
        // Agrega el html del carrito en el tbody
        contenedorCarrito.appendChild(row)
    })
}

// Elimina los cursos del tbody
function limpiarHTML(){
    while (contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
}