// { id: 1, recuperarClave: function(){} }

function Usuario() {
    this.id = 1;
    this.recuperarClave = function () { // Métodos
        console.log('Recuperando clave...');
    }
}

let usuario = new Usuario();
console.log(usuario);

usuario.recuperarClave();