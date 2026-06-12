document.addEventListener("DOMContentLoaded", () => {
  function updateClock() {
    const timeEl = document.getElementById("time");
    const dateEl = document.getElementById("date");
    const tzEl = document.getElementById("tz");
    const offsetEl = document.getElementById("offset");

    // safety check (prevents crash)
    if (!timeEl || !dateEl || !tzEl || !offsetEl) return;

    const now = new Date();

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
});
