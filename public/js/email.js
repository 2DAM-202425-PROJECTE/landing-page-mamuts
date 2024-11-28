// Inicializa EmailJS con tu User ID
emailjs.init('3XHjrYmJ8y6_zvSpe');

const sendEmail = (e) => {
    e.preventDefault(); // Evita que la página se recargue

    // Obtener el prefijo y el número completo del teléfono
    const phonePrefix = iti.getSelectedCountryData().dialCode; // Obtiene solo el prefijo
    const phoneNumber = iti.getNumber(); // Obtiene el número completo con el prefijo

    // Asigna el prefijo y el número completo a los campos ocultos
    document.getElementById('phonePrefix').value = phonePrefix;
    document.getElementById('phone-number').value = phoneNumber;

    // Envía el formulario a través de EmailJS
    emailjs.sendForm('service_ncmoyw9', 'template_uamjarn', e.target)
        .then((result) => {
            console.log(result.text);
            alert("¡Mensaje enviado!");
        }, (error) => {
            console.log(error.text);
            alert("Ocurrió un error al enviar el mensaje.");
        });
};

// Selecciona el formulario y agrega el evento submit
const form = document.getElementById('my-form');
form.addEventListener('submit', sendEmail);
