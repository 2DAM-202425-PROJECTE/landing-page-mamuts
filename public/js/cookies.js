// Funció per acceptar cookies
function acceptCookies() {
    localStorage.setItem("cookiesPreference", "accepted"); // Guarda la preferència com a "accepted" en localStorage
    hideCookieBanner();
}

// Funció per rebutjar cookies
function rejectCookies() {
    localStorage.setItem("cookiesPreference", "rejected"); // Guarda la preferència com a "rejected" en localStorage
    hideCookieBanner();
}

// Oculta el banner de cookies
function hideCookieBanner() {
    const cookieBanner = document.getElementById("cookie-banner");
    if (cookieBanner) {
        cookieBanner.style.display = "none";
    }
}

// Comprova l'estat al carregar la pàgina
document.addEventListener("DOMContentLoaded", () => {
    // Comprova si ja existeix una preferència guardada
    const cookiesPreference = localStorage.getItem("cookiesPreference");

    if (cookiesPreference) {
        // Si ja hi ha preferència, oculta el banner
        hideCookieBanner();
    } else {
        // Si no hi ha preferència, assegura't que es mostri
        const cookieBanner = document.getElementById("cookie-banner");
        if (cookieBanner) {
            cookieBanner.style.display = "block";
        }
    }
});