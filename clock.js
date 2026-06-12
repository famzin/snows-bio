function updateClock() {
  const now = new Date();

  document.getElementById("time").textContent =
    now.toLocaleTimeString();

  document.getElementById("date").textContent =
    now.toLocaleDateString(undefined, {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric"
    });

  document.getElementById("tz").textContent =
    Intl.DateTimeFormat().resolvedOptions().timeZone;

  const offsetEl = document.getElementById("offset");
  const local = new Date();
  const diff = -local.getTimezoneOffset() / 60;

  offsetEl.textContent = `Your time: ${diff >= 0 ? "+" : ""}${diff}h`;
}
