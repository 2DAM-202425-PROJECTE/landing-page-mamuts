// public/letters.js

// Mostrar el popup
function showPopup() {
    document.getElementById("popup-overlay").style.display = "flex"; // Mostrar el popup como flexbox
}

// Ocultar el popup
function closePopup() {
    document.getElementById("popup-overlay").style.display = "none"; // Ocultar el popup
}

// Validar email
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular para validar email
    return re.test(email);
}
// Suscribir usuario
function subscribe() {
    const emailInput = document.getElementById("email-input").value;

    if (validateEmail(emailInput)) {
        // Datos que se enviarán al servidor backend
        const templateParams = {
            user_email: emailInput, // Correo del usuario
        };

        // Enviar datos al servidor backend usando Fetch
        fetch('/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(templateParams),
        })
            .then(response => {
                if (!response.ok) {
                    return response.text().then(text => { throw new Error(text) });
                }
                return response.json();
            })
            .then(data => {
                console.log("Correo enviado correctamente:", data); // Registro en consola
                alert("Correu enviat correctament! Revisa la teva bústia.");
                closePopup(); // Cierra el popup después de enviar
            })
            .catch((error) => {
                console.error("Error al enviar el correu:", error); // Registro en consola
                alert("Hi ha hagut un error en enviar el correu. Torna-ho a provar.");
                console.log("Detalles del error:", error.message); // Detalles del error
            });
    } else {
        alert("Si us plau, introdueix una adreça de correu electrònic vàlida."); // Mensaje de error
    }
}