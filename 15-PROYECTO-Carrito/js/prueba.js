const listaCursos = document.querySelector('#lista-cursos')
const vaciarCarrito = document.querySelector('#vaciar-carrito')
const carrito = document.querySelector('#carrito')
let articulosCarrito = []
const contenedorCarrito = document.querySelector('#lista-carrito tbody')

addEventListener()
function addEventListener(){
    listaCursos.addEventListener('click',agregarCurso) // Agregando el curso
    carrito.addEventListener('click',eliminarCurso) // Eliminar un curso
    vaciarCarrito.addEventListener('click', () => {
        articulosCarrito = []
        limpiarHTML()
    }) //Vaciar Carrito
}

function agregarCurso(e){
    e.preventDefault()
    if(e.target.classList.contains('agregar-carrito')){
        const informacionCurso = e.target.parentElement.parentElement
        leerDatosCurso(informacionCurso)
    }
}

function eliminarCurso(e){
    if(e.target.classList.contains('borrar-curso')){
        const valorId = e.target.getAttribute('data-id')
        articulosCarrito = articulosCarrito.filter(curso => curso.id !== valorId)
        carritoHTML()
    }
}

function leerDatosCurso(curso){
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('.agregar-carrito').getAttribute('data-id'),
        cantidad: 1
    }

    // Actualizar Cantidad
    const existe = articulosCarrito.some(curso => curso.id === infoCurso.id)
    if(existe){
        const cursos = articulosCarrito.map(curso => {
            if( curso.id === infoCurso.id){
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
        articulosCarrito = [...articulosCarrito,infoCurso]
    }
    
    carritoHTML()
}

function carritoHTML(){
    // Limpiar HTML
    limpiarHTML()

    articulosCarrito.forEach(curso => {
        const { imagen,titulo,precio,cantidad,id } = curso
        const row = document.createElement('tr')
        row.innerHTML = `
            <td><img src="${imagen}" width="100"></td>
            <td>${titulo}</td>
            <td>${precio}</td>
            <td>${cantidad}</td>
            <td><a href="#" class="borrar-curso" data-id="${id}"> X </td>
        `
        contenedorCarrito.appendChild(row)
    })
}

function limpiarHTML(){
    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
}