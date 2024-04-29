/**
 * Nombre: ancho x alto
 * 8K: 7680 x 4320
 * 4K: 3840 x 2160
 * WQHD: 2560 x 1440
 * FHD: 1920 x 1080
 * HD: 1280 x 720
 */
function nombreResolucion(ancho, alto) {
    switch(true) {
        case (ancho >= 7680 && alto >=4320):
            return '8K'
        case (ancho >= 3840 && alto >=2160):
            return '4K'
        case (ancho >= 2560 && alto >=1440):
            return 'WQHD'
        case (ancho >= 1920 && alto >=1080):
            return 'FHD'
        case (ancho >= 1280 && alto >=720):
            return 'HD'
        default:
            return false;
    }
}

let nombre = nombreResolucion(1366, 768);
console.log(nombre);