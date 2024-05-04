const punto = {
    x: 10,
    y: 20,
    dibujar() { // Esto es equivalente a dibujar: function() { ... }
        console.log('Dibujar');
    }
};

// delete punto.dibujar;
if ('dibujar' in punto) { // Verifica si la propiedad existe en el objeto
    punto.dibujar();
}

// let key = Object.keys(punto);
console.log(Object.keys(punto)); // Devuelve un array con las propiedades del objeto
for (let llave of Object.keys(punto)) {
    console.log(llave, punto[llave]);
}

for (let entry of Object.entries(punto)) {
    console.log(entry);
}

for (let llave in punto) {
    console.log(llave, punto[llave]);
}