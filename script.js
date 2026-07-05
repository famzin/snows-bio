const config = {
    name: "snow",
    handle: "@sleepysnow.mp3",
    role: "Developer",
    avatar: "https://github.com/USERNAME.png",

    status: "online",

    visitors: 0,

    bio: [
        "Write something about yourself.",
        "You can have multiple paragraphs.",
        "Everything here is editable."
    ],

    projects: [
        {
            name: "https://snows.rest",
            description: "this website.",
            url: "https://snows.rest",
            tags: ["HTML", "CSS", "JavaScript"]
        }
    ],

    socials: [
        {
            label: "Discord",
            handle: "@sleepysnow.mp3 on Discord",
            url: "https://discord.com/users/1453556642296627355"
        },
        {
            label: "GitHub",
            handle: "@snowy-xyz",
            url: "https://github.com/snowy-xyz"
        }
    ]
};
console.log("script loaded");
window.addEventListener("load", () => {
    function initStars() {
  const canvas = document.getElementById("stars");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // simple fallback (no animation yet)
  ctx.fillStyle = "white";
  for (let i = 0; i < 50; i++) {
    ctx.fillRect(
      Math.random() * canvas.width,
      Math.random() * canvas.height,
      1,
      1
    );
  }
}
    function initIntro() {
  const intro = document.getElementById("intro");
  const app = document.getElementById("app");
  const music = document.getElementById("bgMusic");

  if (!intro || !app) return;

  intro.addEventListener("click", () => {
    intro.classList.add("out");
    app.classList.add("visible");

    if (music) {
      music.volume = 0.4;
      music.play().catch(err => {
        console.log("music blocked:", err);
      });
    }
  });
}
    initNavigation();
    loadLanyard();
    renderPage();
});
function initIntro() {
  const intro = document.getElementById("intro");
  const app = document.getElementById("app");
  const music = document.getElementById("bgMusic");

  if (!intro || !app) return;

  intro.addEventListener("click", () => {
    intro.classList.add("out");
    app.classList.add("visible");
   console.log("intro init running");
    // optional music start
    if (music) {
      music.volume = 0.4;
      music.play().catch(() => {
          console.log("intro init running");
        // autoplay might be blocked — ignore error
      });
    }
  });
}
