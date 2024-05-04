function suma(a, b) {
  console.log(arguments);
  return a + b;
}

let resultado = suma(5, 3, 2, 4, 7);
console.log(resultado);

console.log(typeof suma);