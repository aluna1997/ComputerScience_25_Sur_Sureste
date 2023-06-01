
class Persona {
    constructor(nombre, apellido, edad, pais, ocupacion){
        // THIS NOS SIRVE PARA HACER UNA REFERENCIA A UNA PROPIEDAD DEL OBJETO
        // LO INVOCAMOS HASTA EL PRINCIPIO DE LA CLASE, PARA QUE ESTE
        //PRESENTE EN TODO EL CÓDIGO

        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.pais = pais
        this.ocupacion = ocupacion
    }

    //METODOS
    Saludar(){
          // TEXTO + VARIABLES
        return `HOLA MI NOMBRE ES ${this.nombre} ${this.apellido} Y TENGO ${this.edad} AÑOS` 
    }

    Hablar(){
        return "BLA BLA BLA ESTOY TARAREANDO"
    }
}

  //INSTANCIAS DE LA CLASE 

  const personaUno = new Persona ("CESAR","GARCIA",28,"COLOMBIA","PROFESOR")
  const personaDos = new Persona ("RENE","MANZANO",30,"MEXICANO","SENSEI DEVF")

console.log(personaUno, personaUno.Saludar())
console.log(personaDos.Hablar())
