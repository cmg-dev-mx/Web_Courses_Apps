/**
 * Crear algoritmo que tome un arreglo
 * de objetos y devuelva un arreglo de
 * pares
 */

let array = [
    {
        id: 1,
        name: 'Nicolas',
    },
    
    {
        id: 2,
        name: 'Felipe',
    },
    {
        id: 3,
        name: 'Alberto',
    },
];

let pares = [
    [1, {id: 1, name: "Nicolas"}],
    [2, {id: 2, name: "Felipe"}],
    [3, {id: 3, name: "Alberto"}],
]

function toPairs(arr) {
    let pair = [];
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        pair[i] = [element.id, element];
    }
    return pair;
}

let resultado = toPairs(array);
console.log(resultado);