/**
 * Lógica para la calculadora de precios de tortas
 */
function calculateCakePrice() {
  const weight = document.getElementById("cake-weight").value;
  const basePrice = document.getElementById("cake-type").value;
  const resultDiv = document.getElementById("price-result");

  if (weight > 0) {
    const total = weight * basePrice;
    resultDiv.innerHTML = `Precio Estimado: <span class="text-pink-600">$${total.toLocaleString()} USD</span>`;
    resultDiv.classList.remove("hidden");

    // Efecto de entrada suave
    resultDiv.style.opacity = "0";
    setTimeout(() => {
      resultDiv.style.transition = "opacity 0.5s";
      resultDiv.style.opacity = "1";
    }, 10);
  } else {
    alert("Por favor, ingresa un peso válido en kilos.");
  }
}

/**
 * Lógica para enviar mensaje de WhatsApp desde el footer
 */
function sendWhatsAppMessage() {
  const text = document.getElementById("wa-message").value;
  const phoneNumber = "541122334455"; // Reemplaza con tu número real

  if (text.trim() === "") {
    alert("Por favor escribe tu pedido o consulta antes de enviar.");
    return;
  }

  const encodedText = encodeURIComponent("¡Hola Marabou! " + text);
  const waUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;

  window.open(waUrl, "_blank");
}

// Sugerencia dinámica basada en la hora del día (extra)
window.onload = () => {
  const hour = new Date().getHours();
  const welcomeMsg = document.querySelector("header h1");
  if (hour < 12) {
    console.log("Buenos días, ¡hora de un buen pastel de desayuno!");
  } else if (hour > 18) {
    console.log("Buenas noches, ¿qué tal un postre ligero para cerrar el día?");
  }
};
