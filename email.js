
// Inicializa EmailJS con tu User ID
emailjs.init('3XHjrYmJ8y6_zvSpe'); // Reemplaza 'YOUR_USER_ID' con tu ID de usuario

const sendEmail = (e) => {
    e.preventDefault(); // Evita que la página se recargue

    emailjs.sendForm('service_ncmoyw9', 'template_uamjarn', e.target) // Usa tu Service ID y Template ID
        .then((result) => {
            console.log(result.text);
            alert("¡Mensaje enviado!");
        }, (error) => {
            console.log(error.text);
            alert("Ocurrió un error al enviar el mensaje.");
        });
};

// Selecciona el formulario y agrega el evento submit
const form = document.getElementById('my-form'); // Asegúrate de que tu formulario tenga este ID
form.addEventListener('submit', sendEmail);
