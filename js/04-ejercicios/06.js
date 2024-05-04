/**
 * Crear algoritmo que devuelva cantidad
 * de números positivos en un array
 */
let array = [2, 5 ,7, 15, -5, -100, 55];

function cuantosPositivos(arr) {
    let counter = 0;
    for (num of arr) {
        if (num > 0) {
            counter++;
        }
    }
    return counter;
}

let resultado = cuantosPositivos(array);
console.log(resultado);