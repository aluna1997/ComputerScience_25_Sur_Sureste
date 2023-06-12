// Recorrido clasico.
let array = [1,2,3,4,5,6,7,8,9,10];
for (let i = 0; i < array.length; i++){
    console.log(array[i]);
}

// Recorrido for of.
let array2 = [1,2,3,4,5,6,7,8,9,10];
for (let element of array2){
    console.log(element);
}

// Asi aplicamos una función a cada elemento del array.
let array3 = [1,2,3,4,5,6,7,8,9,10];

function sumaUno(element){
    element = element + 1;
    return element
}

let res3 = array3.map(sumaUno);
console.log(res3);


// Asi filtramos elementos de un array.
let array4 = [1,2,3,4,5,6,7,8,9,10];

function mayorACinco(element){
    if (element > 5){
        return element
    } else {
        return null;
    }
}

let res4 = array3.map(mayorACinco);
console.log(res4);