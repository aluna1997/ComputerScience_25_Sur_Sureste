//* PASOS PARA DESARROLLAR EL CÓDIGO DE UN ÁRBOL BINARIO
//* 2 CLASES, 1 CLASE - NODOS , 1 CLASE - ÁRBOL BINARIO 
class Node {  //creamos nuestros nodos
    constructor(data,left,right){
        this.data=data
        this.left=left
        this.right=right
    }
}
class BinaryTree  {  //creamos nuestro árbol binario
    constructor(){
        this.root=null
    }
    //VAMOS A TENER 2 METODOS PRINCIPALES
    // AGREGAR -> add: se va a encargar de agregar un dato
    // CONTIENE -> contains: verificar si un nodo existe respecto a un dato 
    add(data){
        //lo primero que hacemos es verificar si la raiz (root) está vacia
        if(this.root === null){
            // vamos a crear un nuevo nodo (data,null,null)
            this.root = new Node (data,null,null)
            return
        }
        // si no está vacio
        //vamos a crear un nuevo nodo -> currentNode (nodo actual)
        let currentNode = this.root
        //agregamos un ciclo mientra cada nodo sea un subarbol
        while(true){
           if (data < currentNode.data){
            //revisamos si el nodo de la izquieda está vacio
            if(currentNode.left !== null){
                // mi nodo actual se le asigan a la posición de la izquierda
                currentNode = currentNode.left
            }else{
                currentNode.left = new Node (data,null,null)
                return currentNode.left
            }
           } else{
            //si el nodo de la derecha está vacio
            if(currentNode.right !== null){
                //agregamos nu nuevo nodo
                currentNode = currentNode.right
            }else{
                //cambiar nuestro nodo actual por el espacio a la derecha
                currentNode.right = new Node (data,null,null)
                return currentNode.right
             }
           }
        }
    }
    contains(data){
        //partimos de la raiz 
        let currentNode = this.root
        //mientras currentNode exista yo me puedo mover a la izquierda o a la derecha 
        while(currentNode !== null){
            //exista data adentro de nuestros nodos
            if( data === currentNode.data){
                return true
            } else {
                if(data < currentNode.data){
                    currentNode = currentNode.left
                }else{
                    currentNode = currentNode.right
                }
            }
        }
        return false
    }
}
//AGREGAMOS INFORMACIÓN O DATOS A NUESTROS RESPECTIVOS NODOS
const nodo = new BinaryTree()
nodo.add(12)
nodo.add(13)
nodo.add(11)
console.log(nodo)
console.log(nodo.contains(20))//false, no existe el nodo con la data (número) 20