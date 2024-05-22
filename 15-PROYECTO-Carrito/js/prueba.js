const listaCursos = document.querySelector('#lista-cursos')
const listaCarrito = document.querySelector('#lista-carrito tbody')
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const carrito = document.querySelector('#carrito');


let articulosCarrito = [];

eventListeners();

function eventListeners(){
    listaCursos.addEventListener('click', agregarCurso)
    carrito.addEventListener('click', eliminarCurso)
    vaciarCarritoBtn.addEventListener('click', () => {
        articulosCarrito = [];
        limpiarHTML()
    })
}

// Elimianr un curso

function eliminarCurso(e){
    if(e.target.classList.contains('borrar-curso')){
        const cursoId = e.target.getAttribute('data-id')
        
        articulosCarrito = articulosCarrito.filter( curso => curso.id !== cursoId)
        carritoHTML();
    }
}

// Agregar un curso 

function agregarCurso(e){
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
        const cursoSeleccionado = e.target.parentElement.parentElement;
        informacionCurso(cursoSeleccionado);
    }
}

function informacionCurso(cursoSeleccionado){
    const datosCurso = {
        imagen: cursoSeleccionado.querySelector('img').src,
        titulo: cursoSeleccionado.querySelector('h4').textContent,
        precio: cursoSeleccionado.querySelector('.precio span').textContent,
        id: cursoSeleccionado.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    const existe = articulosCarrito.some( articulo => articulo.id === datosCurso.id);
    
    if(existe){
        const nuevoCarrito = articulosCarrito.map( articulo => {
            if(articulo.id === datosCurso.id){
                articulo.cantidad++;
                return articulo;
            }else{
                return articulo;
            }
        })

        articulosCarrito = [...nuevoCarrito];
    }else{
        articulosCarrito = [...articulosCarrito, datosCurso]
    }

    

    carritoHTML();
}

function carritoHTML(){

    limpiarHTML();

    articulosCarrito.forEach( articulo =>{
        const {imagen,titulo,precio,id,cantidad} = articulo;
        const row = document.createElement('tr');

        row.innerHTML = `
            <td><img src="${imagen}" width="100"></td>
            <td>${titulo}</td>
            <td>${precio}</td>
            <td>${cantidad}</td>
            <td><a href="#" class="borrar-curso" data-id="${id}">X</td>
        `

        listaCarrito.appendChild(row);
    })
}

function limpiarHTML(){
    while(listaCarrito.firstChild){
        listaCarrito.removeChild(listaCarrito.firstChild);
    }
}