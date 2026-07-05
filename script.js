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

function initStars() {
  const canvas = document.getElementById("stars");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");

  // resize helper
  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener("resize", resize);

  // create stars
  const stars = Array.from({ length: 120 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 1.5,
    speed: Math.random() * 0.4 + 0.1
  }));

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "white";

    for (let star of stars) {
      // move down
      star.y += star.speed;

      // reset when off screen
      if (star.y > canvas.height) {
        star.y = 0;
        star.x = Math.random() * canvas.width;
      }

      // draw star
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
      ctx.fill();
    }

    requestAnimationFrame(animate);
  }

  animate();
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
            music.play().catch(() => {});
        }
    });
}

window.addEventListener("load", () => {
    initStars();
    initIntro();

    if (typeof initNavigation === "function") initNavigation();
    if (typeof loadLanyard === "function") loadLanyard();
    if (typeof renderPage === "function") renderPage();
});
