function updateClock() {
  const now = new Date();

  const timeEl = document.getElementById("time");
  const dateEl = document.getElementById("date");
  const tzEl = document.getElementById("tz");
  const offsetEl = document.getElementById("offset");

  if (!timeEl || !dateEl || !tzEl || !offsetEl) return;

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
  offsetEl.textContent = `Your time: ${diff >= 0 ? "+" : ""}${diff}h`;
}

updateClock();
setInterval(updateClock, 1000);
