const contenedorCarrito = document.querySelector('#lista-carrito tbody')
const listaCursos = document.querySelector('#lista-cursos')
let articulosCarrito = []

cargarEventListener()
function cargarEventListener(){
    listaCursos.addEventListener('click', agregarCurso)
}

function agregarCurso(e){
    e.preventDefault()
    if(e.target.classList.contains('agregar-carrito')){
        const cursoSeleccionado = e.target.parentElement.parentElement
        leerDatosCurso(cursoSeleccionado)
    }
}

function leerDatosCurso(cursos){

    const infoCurso = {
        img: cursos.querySelector('img').src,
        titulo: cursos.querySelector('h4').textContent,
        precio: cursos.querySelector('.precio span').textContent,
        id: cursos.querySelector('.agregar-carrito').getAttribute('data-id'),
        cantidad: 1
    }

    articulosCarrito = [...articulosCarrito,infoCurso]
    carritoHTML()
}

function carritoHTML(){
    // Limpiar HTML
    limpiarHTML()
    articulosCarrito.forEach(curso => {
        const row = document.createElement('tr')
        row.innerHTML = `
            <td>${curso.titulo}</td>
        `
        // Mostrando en el html
        contenedorCarrito.appendChild(row)
    })
}

function limpiarHTML(){
    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
}