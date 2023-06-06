import {Largometraje} from "./Largometraje.js"

//* Documental es mi subclase
 class Documental extends Largometraje {
        constructor(titulo,duracion,autor){
            //? AQUÍ INDICAMOS QUE ATRIBUTOS DE MI CLASE PADRE VAN A HEREDAR 
            super(titulo,duracion)
            this.autor = autor 
        }

    //MÉTODOS PUEDEN SER PROPIOS DE MI SUBCLASE O HEREDARLOS DE MI SUPERCLASE  
        getAutor(){
            return this.autor = autor
        }
 } 

 //EXPORTAMOS DOCUMENTAL
 export{Documental}
