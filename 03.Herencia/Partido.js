import {Largometraje} from "./Largometraje.js"

//* Partido es mi subclase
 class Partido extends Largometraje {
    constructor(titulo,duracion,equipo){
        //? AQUÍ INDICAMOS QUE ATRIBUTOS DE MI CLASE PADRE VAN A HEREDAR
         super(titulo,duracion)
         this.equipo = equipo
    }
   
    // MÉTODOS
    getTeam(){
        return this.equipo
    }

 }

 //EXPORTAMOS PARTIDO
    export{Partido}