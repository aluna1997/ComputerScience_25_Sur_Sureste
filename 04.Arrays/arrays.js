// Así se declara un arreglo vacío.
let verduras = [];

// Así se declara un arreglo con valores iniciales.
let frutas = ['Pera', 'Manzana', 'Plátano', 'Naranja'];
let miArreglo = ['Soy String',2,2.3,true,[1,2,3]]

console.log(frutas);
console.log(miArreglo);

// Asi accedemos a un elemento de un arreglo (sabemos la posición).
manz = frutas[1];
console.log(manz);

// Asi agregamos un elemento al final del arreglo.
frutas.push('Guayaba');
console.log(frutas);

// Asi agregamos un elemento al inicio del arreglo.
frutas.unshift('Mandarina');
console.log(frutas);

// Asi eliminamos un elemento al final del arreglo.
frutas.pop();
console.log(frutas);

// Asi eliminamos un elemento al inicio del arreglo.
frutas.shift();
console.log(frutas);


// Así modificamos un elemento en una posición específica de un array.
frutas[0] = 'Uva';
console.log(frutas);

// Así sabemos en número de elementos que tiene un array.
console.log(frutas.length);

// Así convertimos un string a una lista (deben tener un separador bien definido).
let strVerduras = "Cebolla,Perejil,Tomate,Calabaza";
let arrayVerduras = strVerduras.split(',');
console.log(arrayVerduras);

// Asi podemos eliminar una parte de un array (se debe indicar la posición inicial y final (-1) de los elementos que dejarás.
let arrayNums = [0,1,2,3,4,5,6,7,8,9];
arrayNumsRecortado = arrayNums.slice(1);
console.log(arrayNumsRecortado);

let arrayNums2 = [0,1,2,3,4,5,6,7,8,9];
arrayNumsRecortado2 = arrayNums2.slice(1,3);
console.log(arrayNumsRecortado2);

// Entonces asi eliminamos un elemento específico del array.
let arrayNums3 = [0,1,2,3,4,5,6,7,8,9];
arrayNums3.splice(1,1);
console.log(arrayNums3);

// Asi podemos ordenar una lista de forma ascendente.
let ordena = [6,7,3,4,5,2,1,2,3];
ordena.sort();
console.log(ordena);

let ordena2 = ['b','a','d','c'];
ordena2.sort();
console.log(ordena2);


// Así podemos obtener la reversa de un array.
ordena2.reverse();
console.log(ordena2);

// Asi podemos obtener un nuevo arreglo concatenando dos anteriores.
let array1 = [0,1,2]
let array2 = [3,4,5]
let array3 = array1.concat(array2);
console.log(array1);
console.log(array2);
console.log(array3);

// Así podemos convertir un array a cadena de texto.
let arrayJoin = ['0','1','2','3','4'];
strJoin = arrayJoin.join(' ');
console.log(strJoin);

// Asi preguntamos si al menos un elemento cumple con cierta condición en un array.
let someArray = [12,3,4,5,6,10];
let resSome = someArray.some(elemento => elemento > 50);
console.log(resSome);

// Así encontramos el primer elemento que cumple con cierta condición.
let findArray = [10,20,30,45,67];
let resFind = findArray.find(elemento => elemento > 100);
console.log(resFind);

// Así encontramos el indice del primer elemento que cumple con cierta condición.
let findArrayI = [10,20,30,45,67];
let resFindI = findArray.findIndex(elemento => elemento > 100);
console.log(resFind);


// Así preguntamos si una variable de javascript es un array.
let esArray = [];
console.log(Array.isArray(esArray));

// Así veridicamos si el array tiene algun elemento.
let includesArray = [1,2,3,4,6];
let resIncudes = includesArray.includes(6);
console.log(resIncudes);