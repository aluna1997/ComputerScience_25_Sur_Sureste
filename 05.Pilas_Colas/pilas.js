class Pila {

    // Constructor: "los valores iniciales de los atributos de mi clase."
    constructor(){
        // Atributos
        this.pila = []
    }

    // Metodos
    
    // Apilar un elemento a la pila.
    push(elemento){
        return this.pila.push(elemento)
    }

    // Desapilar un elemento de la pila.
    pop(){
        return this.pila.pop()
    }

    // Saber el elemento que esta hasta arriba de la pila.
    peek(){
        return this.pila[this.pila.length - 1]
    }

    // Saber el numero de elmentos de la pila.
    size(){
        return this.pila.length
    }

    // Imprimir el contenido de la pila.
    print(){
        console.log(this.pila)
    }

}

// Instancia de la clase/objeto Pila
let pilita = new Pila()
pilita.push('Platano')
pilita.push('Tuna')
pilita.push('Naranja')
pilita.push('Uva')

let guardarElementoPop = pilita.pop()
console.log(guardarElementoPop);