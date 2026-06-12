function updateClock() {
  const timeEl = document.getElementById("time");
  const dateEl = document.getElementById("date");
  const tzEl = document.getElementById("tz");
  const offsetEl = document.getElementById("offset");

  // stop if elements aren't found (prevents crashes)
  if (!timeEl || !dateEl || !tzEl || !offsetEl) return;

  const now = new Date();

  // Toronto time
  const toronto = new Date(
    now.toLocaleString("en-US", { timeZone: "America/Toronto" })
  );

  const time = toronto.toTimeString().split(" ")[0];
  const date = toronto.toDateString();

  timeEl.textContent = time;
  dateEl.textContent = date;
  tzEl.textContent = "America/Toronto";

  const local = new Date();
  const diff = Math.round((local - now) / 3600000);
  offsetEl.textContent = `Your time: ${diff >= 0 ? "+" : ""}${diff}h`;

  // analog clock hands (safe checks included)
  const secHand = document.getElementById("s");
  const minHand = document.getElementById("m");
  const hourHand = document.getElementById("h");

  if (secHand) {
    secHand.style.transform =
      `translate(-50%, -100%) rotate(${toronto.getSeconds() * 6}deg)`;
  }

  if (minHand) {
    minHand.style.transform =
      `translate(-50%, -100%) rotate(${toronto.getMinutes() * 6}deg)`;
  }

  if (hourHand) {
    hourHand.style.transform =
      `translate(-50%, -100%) rotate(${toronto.getHours() * 30}deg)`;
  }
}

// wait until HTML exists before starting
document.addEventListener("DOMContentLoaded", () => {
  updateClock();
  setInterval(updateClock, 1000);
});
