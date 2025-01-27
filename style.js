function darLike(boton) {
    const contador = boton.querySelector("span"); // Encuentra el span dentro del botón
    contador.textContent = parseInt(contador.textContent) + 1; // Incrementa el conteo
}

function darDislike(boton) {
    const contador = boton.querySelector("span"); // Encuentra el span dentro del botón
    contador.textContent = parseInt(contador.textContent) + 1; // Incrementa el conteo
}
function abrirImagen(imagen) {
    const modal = document.getElementById('modal');
    const imagenModal = document.getElementById('imagenModal');

    // Establece la fuente de la imagen seleccionada
    imagenModal.src = imagen.src;

    // Muestra el modal
    modal.style.display = 'flex';
}

function cerrarImagen() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}
function descargarImagen(url, nombreArchivo) {
    const enlace = document.createElement("a");
    enlace.href = url; // URL de la imagen
    enlace.download = nombreArchivo; // Nombre con el que se descargará
    document.body.appendChild(enlace);
    enlace.click();
    document.body.removeChild(enlace); // Limpia el enlace después de usarlo
}
function verificarClave() {
    // Obtén el valor ingresado por el usuario
    const claveIngresada = document.getElementById("clave").value;

    // Define la clave correcta
    const claveCorrecta = "miClaveSecreta";

    // Selecciona el elemento para mostrar mensajes
    const mensaje = document.getElementById("mensaje");

    // Verifica si la clave es correcta
    if (claveIngresada === claveCorrecta) {
        mensaje.textContent = "¡Contraseña correcta! Bienvenido.";
        mensaje.style.color = "green"; // Mensaje en verde
    } else {
        mensaje.textContent = "Contraseña incorrecta. Intenta nuevamente.";
        mensaje.style.color = "red"; // Mensaje en rojo
    }
}
function ampliarImagen(img) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("imagenModal");
    modal.style.display = "flex";
    modalImg.src = img.src;
}

function cerrarModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}
document.getElementById("modoOscuro").addEventListener("click", () => {
    document.body.classList.toggle("oscuro");
});