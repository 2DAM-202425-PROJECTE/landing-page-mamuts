// Mostrar el popup
function showPopup() {
    document.getElementById("popup-overlay").style.display = "flex"; // Mostrar el popup como flexbox
}

// Ocultar el popup
function closePopup() {
    document.getElementById("popup-overlay").style.display = "none"; // Ocultar el popup
}

// Función para simular la suscripción
function subscribe() {
    const email = document.getElementById("email-input").value;
    if (email) {
        alert("¡Gracias por suscribirte! Te hemos enviado un email de confirmación.");
        closePopup(); // Cierra el popup después de suscribirse
    } else {
        alert("Por favor, ingresa un correo válido.");
    }
}