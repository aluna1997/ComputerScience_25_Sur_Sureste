// CREAR NUESTRA CLASE 

class Estudiante {
    // ATRIBUTOS
    constructor(nombre, apellido, caliFinal, inscrito){
     this.nombre = nombre
     this.apellido = apellido
     this.caliFinal = caliFinal
     this.inscrito = inscrito
    }

    //METODOS 
    Aprobado(){
   // desarrollar lógica (IF ELSE)
        if(this.caliFinal >= 7.6){
            return "APROBADO: " + Math.round(this.caliFinal)
        }else if (this.caliFinal <= 7.5){
            return "REPROBADO: " + Math.round(this.caliFinal)
        }else{
            return "CALIFICACION NO VALIDA, ERROR!"
        }
    }

    Inscrito(){
        // desarrollar lógica (IF ELSE )
        if(this.inscrito === true ){
            return "el estudiante si está inscrito en el semestre"
        }else if (this.inscrito === false){
            return "el estudiante no está inscrito en el semestre"
        }else {
            return "error en el sistema consultar más tarde. . ."
        }
    }
}
// VAMOS A CREAR NUESTRAS INSTANCIAS DE LA CLASE ESTUDIANTE
                             //HARCODEAR LOS DATOS 
const estudianteUno = new Estudiante ("JUAN","GOMEZ", 8.2, true)
const estudianteDos = new Estudiante ("TEODORO","ANDREZ",7.2,false)
const estudianteTres = new Estudiante ("CESAR","GARCIA",9.3, true)
const estudianteCuatro = new Estudiante ("MARIA","GOMEZ",8.3,2)

console.log(
            estudianteUno.nombre, 
            estudianteUno.apellido, 
            estudianteUno.Aprobado(), 
            estudianteUno.Inscrito()
            )

console.log(
            estudianteDos.nombre, 
            estudianteDos.apellido,
            estudianteDos.Aprobado(), 
            estudianteDos.Inscrito()
            )

console.log(
            estudianteTres.nombre, 
            estudianteTres.apellido, 
            estudianteTres.Aprobado(), 
            estudianteTres.Inscrito()
            )

console.log(
            estudianteCuatro,
            estudianteCuatro.Aprobado(), 
            estudianteCuatro.Inscrito()
           )
