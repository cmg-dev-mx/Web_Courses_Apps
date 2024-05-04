/**
 * La función call() permite extender la funcionalidad de un objeto o funciones
 */

function Punto(x, y) {
    this.x = x;
    this.y = y;
    this.dibujar = function() { console.log('Dibujando...'); }
}

// NOTA: No es recomendable usar la función Function para crear objetos

// const Point = new Function('x', 'y', `
// this.x = x;
//     this.y = y;
//     this.dibujar = function() { console.log('Dibujando...'); }
// `);

// const p1 = new Point(1, 2);
// console.log(p1);

let punto = {z:7};
Punto.call(punto, 1, 2);
console.log(punto);

Punto.apply(punto, [3, 4]);
console.log(punto);

/**
 * NOTA: La función call() y apply()
 * son muy similares, la diferencia 
 * es que call() recibe los 
 * argumentos separados por coma y 
 * apply() recibe los argumentos en 
 * un array.
 */

