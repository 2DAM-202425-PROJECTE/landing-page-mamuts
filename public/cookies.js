// Funció per acceptar cookies
function acceptCookies() {
    document.getElementById("cookie-banner").style.display = "none";
    localStorage.setItem("cookiesPreference", "accepted"); // Guarda la preferència com a "accepted" en localStorage
}

// Funció per rebutjar cookies
function rejectCookies() {
    document.getElementById("cookie-banner").style.display = "none";
    localStorage.setItem("cookiesPreference", "rejected"); // Guarda la preferència com a "rejected" en localStorage
}
