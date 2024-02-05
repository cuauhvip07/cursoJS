const usuario = {
    nombre:'Carlos',
    apellido: 'Mendez',
    edad: 20,
    direccion: 'Calle',
    mostrarInfo: function(){
        console.log(`${this.nombre} ${this.apellido} tiene una edad de ${this.edad}`)
    }
}

usuario.mostrarInfo()

