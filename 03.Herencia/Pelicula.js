import {Largometraje} from "./Largometraje.js"

//* Pelicula es mi subclase 
    class Pelicula extends Largometraje {
            constructor(titulo,duracion,genero){
                super(titulo,duracion)
                this.genero = genero 
            }
            //MÉTODO
            getGender(){
                return this.genero
            }
    }

    //EXPORTAMOS PELICUA
    export {Pelicula}
