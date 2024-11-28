// Mostrar el popup
function showPopup() {
    document.getElementById("popup-overlay").style.display = "flex";
}

// Ocultar el popup
function closePopup() {
    document.getElementById("popup-overlay").style.display = "none";
}
document.getElementById("newsletterForm").addEventListener("submit", async (event) => {
    event.preventDefault(); // Evita que el formulario recargue la página

    const formData = new FormData(event.target);
    const subscriberData = {
        email: formData.get("email"),
        list_id: "1027805"
    };

    const apiUrl = "https://acumbamail.com/api/1027805/addSubscriber/";
    const apiKey = "8ec5deb8e765416e8e6e7bf30c1fe0a4"; // Clave API de Acumbamail

    try {
        const response = await fetch(apiUrl, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${apiKey}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(subscriberData),
            mode: "cors"
        });

        if (response.ok) {
            alert("¡Gracias por suscribirte!");
        } else {
            alert("Hubo un error al suscribirte.");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("No se pudo procesar tu suscripción.");
    }
});

