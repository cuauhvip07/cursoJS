const footer = document.querySelector('.footer')
const btnFlotante = document.querySelector('.btn-flotante')

btnFlotante.addEventListener('click', mostrarOcultarInfo)

function mostrarOcultarInfo(){
    if(footer.classList.contains('activo')){
        this.textContent = 'Idioma y Moneda'
        this.classList.remove('activo')
        footer.classList.remove('activo')
    }
    else{
        footer.classList.add('activo')
        this.classList.add('activo')
        this.textContent = 'X Cerrar'
    }
}