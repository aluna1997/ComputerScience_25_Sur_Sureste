//* SALA NO ES UNA SUPERCLASE NI ES UNA SUBCLASE
//* SOLAMENTE ES UNA CLASE  

    class Sala {
        constructor(numSala,cantGente,largometraje){
            this.numSala = numSala
            this.cantGente = cantGente
            this.largometraje = largometraje
        }
        //MÉTODOS DE LA CLASE SALA 
        setMovie(){
            return "SE ESTA REPRODUCIENDO: " + this.largometraje.getTitle() +
            "\n Duración: " + this.largometraje.getDuration()
        }

        getPeople(){
            return this.cantGente
        }

        getSalaNumber(){
            return this.numSala
        }
}

//EXPORTAMOS NUESTRA CLASE SALA
    export {Sala}