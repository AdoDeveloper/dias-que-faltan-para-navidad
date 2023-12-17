function updateChristmasDate() {
  const today = new Date();
  const christmas = new Date(today.getFullYear(), 11, 25); // 11 representa diciembre en JavaScript

  // Si la fecha actual es después de Navidad, obtener la fecha de Navidad del próximo año
  if (today.getMonth() === 11 && today.getDate() > 25) {
    christmas.setFullYear(christmas.getFullYear() + 1);
  }

  return christmas;
}

function updateClock() {
  const today = new Date();
  const christmas = updateChristmasDate();

  const diff = christmas.getTime() - today.getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;
}

function countdown() {
  const today = new Date();
  const christmas = updateChristmasDate();

  const difference = christmas.getTime() - today.getTime();
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;
}

// Llamar a la función updateClock() y countdown() al inicio
updateClock();
setInterval(updateClock, 1000);

countdown();
setInterval(countdown, 1000);
