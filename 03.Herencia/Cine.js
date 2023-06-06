//! NO ES UNA SUPERCLASE NI UNA SUBCLASE
//* ES SOLO UNA CLASE
//* ES NUESTRO ARCHIVO PRINCIPAL main.js 

//hacer los imports
import {Sala} from "./Sala.js";
import {Pelicula} from "./Pelicula.js";
import {Documental} from "./Documental.js";
import {Partido} from "./Partido.js";

class Cine {
    constructor(sala){
        this.sala = sala
    }

    //MÉTODOS 
    Reproducir(){
        return this.sala.setMovie() + "\n" + this.sala.getPeople() + "\n" + this.sala.getSalaNumber()
    }
}

// CREAR NUESTROS OBJETOS / INSTANCIAR OBJETOS 


 //* INSTACIAS DE NUESTRA SUBCLASE PELICULA 
 const peliculaUno = new Pelicula ("TITANIC", "220MIN", "B")
 const salaUno = new Sala ("SALA 1", "220PERSONAS", peliculaUno)
 const cinepolisPabellon = new Cine (salaUno) 

 // CREARSE UN DOCUMENTAL

 
 // CREARSE UN PARTIDO



 //* IMPRIMIR NUESTROS OBJETOS EN LA CONSOLA 
 console.log(cinepolisPabellon.Reproducir())