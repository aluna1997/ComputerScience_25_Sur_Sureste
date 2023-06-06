//* LARGOMETRAJE ES MI CLASE PADRE O SUPER CLASE 

class Largometraje {
    constructor(titulo,duracion){
        this.titulo = titulo
        this.duracion = duracion
    }

    //MÉTODOS DE LA CLASE (GETTER & SETTER  (get & set) )

    getTitle() {
        return this.titulo
    }

    getDuration(){
        return this.duracion
    }
}

//USAMOS LA FORMA DEFINIDA POR ECMASCRIPT V6
  export {Largometraje}
