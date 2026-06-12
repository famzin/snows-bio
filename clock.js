function updateClock() {
  const now = new Date();

  const timeEl = document.getElementById("time");
  const dateEl = document.getElementById("date");
  const tzEl = document.getElementById("tz");
  const offsetEl = document.getElementById("offset");

  const secHand = document.getElementById("s");
  const minHand = document.getElementById("m");
  const hourHand = document.getElementById("h");

  // Stop if any clock elements don't exist
  if (
    !timeEl ||
    !dateEl ||
    !tzEl ||
    !offsetEl ||
    !secHand ||
    !minHand ||
    !hourHand
  ) {
    return;
  }

  // Digital clock
  timeEl.textContent = now.toLocaleTimeString();

  dateEl.textContent = now.toLocaleDateString(undefined, {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric"
  });

  tzEl.textContent =
    Intl.DateTimeFormat().resolvedOptions().timeZone;

  const diff = -now.getTimezoneOffset() / 60;
  offsetEl.textContent =
    `Your time: ${diff >= 0 ? "+" : ""}${diff}h`;

  // Analog clock
  const sec = now.getSeconds();
  const min = now.getMinutes();
  const hr = now.getHours() % 12;

  secHand.style.transform =
    `translate(-50%, -100%) rotate(${sec * 6}deg)`;

  minHand.style.transform =
    `translate(-50%, -100%) rotate(${min * 6}deg)`;

  hourHand.style.transform =
    `translate(-50%, -100%) rotate(${hr * 30 + min * 0.5}deg)`;
}

updateClock();
setInterval(updateClock, 1000);
