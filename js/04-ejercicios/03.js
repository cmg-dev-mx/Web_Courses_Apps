/**
 * Indice valida que no sea menor a cero y que el elemento exista en el arreglo
 */
function getById(arr, idx) {
    if (idx < 0 || idx > arr.length) {
        return 'Elemento no existe';
    }
    return arr[idx]
}

let resultado = getById([1, 2, 3], 1)
console.log(resultado)