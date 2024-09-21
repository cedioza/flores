// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Él la estaba esperando con una flor amarilla", time: 17 },
  { text: "Ella lo estaba soñando con la luz en su pupila", time: 4 },
  { text: "Y el amarillo del sol iluminaba la esquina", time: 4 },
  { text: "Lo sentía tan cercano, lo sentía desde niña", time: 5 },
  { text: "Ella sabía que él sabía, que algún día pasaría", time: 2 },
  { text: "Que vendría a buscarla, con sus flores amarillas", time: 1.5 },
  { text: "No te apures no detengas, el instante del encuentro", time: 3.8 },
  { text: "Está dicho que es un hecho, no la pierdas no hay derecho", time: 0.2 },
  { text: "No te olvides, que la vida", time: 0.3 },
  { text: "Casi nunca está dormida", time: 1},
  { text: "En ese bar tan desierto los esperaba el encuentro", time: 21 },
  { text: "Ella llegó en limosina amarilla por supuesto", time: 3.5 },
  { text: "Él se acercó de repente y la miró tan de frente", time: 4 },
  { text: "Toda una vida soñada y no pudo decir nada", time: 4.2 },
  { text: "Ella sabía que él sabía, que algún día pasaría", time: 2.5 },
  { text: "Que vendría a buscarla, con sus flores amarillas", time: 2 },
  { text: "No te apures no detengas, el instante del encuentro", time: 3.4 },
  { text: "Está dicho que es un hecho, no la pierdas no hay derecho", time: 0.4 },
  { text: "No te olvides, que la vida", time: 0.3 },
  { text: "Casi nunca está dormida", time: 1},
  { text: "Flores amarillas", time: 10 },
  { text: "Ella sabía que él sabía, que algún día pasaría", time:7.7 },
  { text: "Que vendría a buscarla, con sus flores amarillas", time: 1 },
  { text: "No te apures no detengas, el instante del encuentro", time: 3.5 },
  { text: "Está dicho que es un hecho, no la pierdas no hay derecho", time: 0.2 },
  { text: "No te olvides, que la vida", time: 0.3 },
  { text: "Casi nunca está dormida", time: 1 },
  { text: "Ella sabía que él sabía", time: 3 },
  { text: "Él sabía, ella sabía", time: 0.3 },
  { text: "Él sabía, ella sabía y se olvidaron, de sus flores amarillas", time: 0.5 },
];



// // Animar las letras
// function updateLyrics() {
//   var time = Math.floor(audio.currentTime);
//   var currentLine = lyricsData.find(
//     (line) => time >= line.time && time < line.time + 6
//   );

//   if (currentLine) {
//     // Calcula la opacidad basada en el tiempo en la línea actual
//     var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
//     var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

//     // Aplica el efecto de aparición
//     lyrics.style.opacity = opacity;
//     lyrics.innerHTML = currentLine.text;
//   } else {
//     // Restablece la opacidad y el contenido si no hay una línea actual
//     lyrics.style.opacity = 0;
//     lyrics.innerHTML = "";
//   }
// }

// setInterval(updateLyrics, 1000);

// //funcion titulo
// // Función para ocultar el título después de 216 segundos
// function ocultarTitulo() {
//   var titulo = document.querySelector(".titulo");
//   titulo.style.animation =
//     "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
//   setTimeout(function () {
//     titulo.style.display = "none";
//   }, 3000); // Espera 3 segundos antes de ocultar completamente
// }

// // Llama a la función después de 216 segundos (216,000 milisegundos)
// setTimeout(ocultarTitulo, 216000);


let currentLine = 0;
let currentCharIndex = 0;
const lyricsDiv = document.getElementById("lyrics");

function typeLine() {
  lyricsDiv.textContent = ''; // Borra el contenido antes de escribir la línea
  if (currentLine < lyricsData.length) {
    const text = lyricsData[currentLine].text;
    const timePerLetter = 80; // Velocidad de aparición por letra (en ms)

    const interval = setInterval(() => {
      lyricsDiv.textContent += text[currentCharIndex];
      currentCharIndex++;

      if (currentCharIndex === text.length) {
        clearInterval(interval);
        currentCharIndex = 0;
        currentLine++;

        // Usa el tiempo específico para la pausa entre líneas
        const nextLineDelay = (lyricsData[currentLine] ? lyricsData[currentLine].time : 5) * 1000;

        setTimeout(() => {
          lyricsDiv.textContent = ''; // Borra el contenido después de escribir la línea
          typeLine(); // Pasa a la siguiente línea después del tiempo especificado
        }, nextLineDelay);
      }
    }, timePerLetter);
  }
}

// Inicia después de 18 segundos
setTimeout(() => {
  typeLine();
}, 18000);
