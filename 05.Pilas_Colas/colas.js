class Cola{
    
    // Los valores incciales de nuestros atributos.
    constructor(){
        this.cola = []
    }

    // Métodos

    enqueue(elemento){
        this.cola.push(elemento)
    }

    dequeue(){
        return this.cola.shift()
    }

    peek(){
        return this.cola[0]
    }

    size(){
        return this.cola.length
    }

    print(){
        console.log(this.cola)
    }

}

let colita = new Cola()

colita.enqueue('Felipe');
colita.enqueue('Juan');

colita.dequeue();

console.log(colita);

