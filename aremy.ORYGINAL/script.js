let indiceImagen = 0;
const intervalo = 3000; // Tiempo en milisegundos para el cambio automático

function mostrarImagen(indice) {
    const imagenes = document.querySelectorAll('.carrusel-imagen-yelet');
    if (indice >= imagenes.length) {
        indiceImagen = 0;
    } else if (indice < 0) {
        indiceImagen = imagenes.length - 1;
    } else {
        indiceImagen = indice;
    }
    const desplazamiento = -indiceImagen * 100;
    document.querySelector('.carrusel-contenedor-yelet').style.transform = `translateX(${desplazamiento}%)`;
}

function cambiarImagen(cambio) {
    mostrarImagen(indiceImagen + cambio);
}

// Cambiar automáticamente la imagen
setInterval(() => {
    mostrarImagen(indiceImagen + 1);
}, intervalo);

// Mostrar la primera imagen al cargar
mostrarImagen(indiceImagen);
