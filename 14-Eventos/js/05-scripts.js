// Scroll con el mouse

window.addEventListener('scroll',(e) =>{
    const premium = document.querySelector('.premium')
    const ubicacion = premium.getBoundingClientRect() // Obtener ubicacion
    console.log(ubicacion)
    
    if (ubicacion.top < 538 & ubicacion.top > -433){
        console.log('El elemento ya esta visible')
    }
    else{
        console.log('Aun no esta visible')
    }
})