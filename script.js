// Define un array (lista) de refranes tecnológicos
const quotes = [
    "La tecnología por sí sola no basta. La tecnología debe fusionarse con las artes y la experiencia para crear algo que acelere tu corazón.",
    "El software es como la entropía: es difícil de controlar y siempre aumenta.",
    "La inteligencia artificial es el nuevo motor de la economía mundial.",
    "La mejor forma de predecir el futuro es crearlo.",
    "El diseño no es solo cómo se ve y cómo se siente. El diseño es cómo funciona."
];

// Función para obtener un refrán aleatorio del array
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length); // Genera un índice aleatorio
    return quotes[randomIndex]; // Devuelve el refrán en ese índice
}

// Cuando el documento HTML esté completamente cargado y listo
document.addEventListener('DOMContentLoaded', () => {
    // Encuentra el párrafo con el id "dailyQuote"
    const quoteElement = document.getElementById('dailyQuote');

    // Si el elemento existe (para evitar errores si no lo encontramos en todas las páginas)
    if (quoteElement) {
        // Inserta un refrán aleatorio en ese párrafo
        quoteElement.textContent = getRandomQuote();
    }
});