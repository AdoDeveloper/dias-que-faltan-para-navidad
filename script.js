
// Obtener la fecha actual
const today = new Date();

// Obtener la fecha de Navidad (25 de diciembre)
const christmas = new Date(2023, 11, 25);

// Si la fecha actual es después de Navidad, obtener la fecha de Navidad del próximo año
if (today.getMonth() == 11 && today.getDate() <= 25) {
  christmas.setFullYear(christmas.getFullYear() + 1);
}

// Función para actualizar el reloj
function updateClock() {
  // Obtener la diferencia entre la fecha actual y la fecha de Navidad
  const diff = christmas.getTime() - today.getTime();

  // Calcular los días, horas, minutos y segundos que faltan
  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diff % (1000 * 60)) / 1000);

  // Actualizar el contenido de los elementos HTML
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
}

// Llamar a la función updateClock() cada segundo
setInterval(updateClock, 1000);

function countdown() {
    const now = new Date();
    const christmas = new Date(2023, 11, 25);
    if (now.getMonth() == 11 && now.getDate() <= 25) {
      christmas.setFullYear(christmas.getFullYear() + 1);
    }
    const difference = christmas.getTime() - now.getTime();
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
  
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
  }
  
  countdown();
  setInterval(countdown, 1000);  