/**
 * Crear algoritmo que tome un arreglo
 * de pares y devuelva un arreglo de
 * objetos.
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
    [1, {name: "Nicolas"}],
    [2, {name: "Felipe"}],
    [3, {name: "Alberto"}],
]

function toArray(pairs) {
    let arr = [];
    for (idx in pairs) {
        let elemento = pairs[idx];
        arr[idx] = elemento[1];
        arr[idx].id = elemento[0];
    }
    return arr;
}

let resultado = toArray(pares);
console.log(resultado);