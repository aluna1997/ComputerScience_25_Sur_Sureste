// Dado el siguiente string “12-56-45-43”, ordena los números de mayor a menor (“56-45-43-12”).
let str = '12-56-45-43';
let array1 = str.split('-');
array1.sort();
array1.reverse();
res = array1.join('-')
console.log(res);

// Supongamos que tienes el siguiente array con edades de un grupo de jóvenes de preparatoria [19,18,17,18,18,20,19,21]. 
// Crea una función de javascript que reciba el arreglo y regrese true en caso de que alguno de esos jóvenes sea menor de edad.
function menorDeEdad(array){
    let res = array.some(elemento => elemento < 18);
    return res
}
let llamada = menorDeEdad([19,18,17,18,18,20,19,21]);
console.log(llamada);

// Dado el siguiente array [‘Nokia’,’Xiaomi’,’BlackBerry’,’iPhone’,’Samnsung’], elimina a Nokia del mismo.
marcas = ['Nokia','Xiaomi','BlackBerry','iPhone','Samnsung'];
marcas.splice(0,1);
console.log(marcas);