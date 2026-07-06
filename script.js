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

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener("resize", resize);

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
      star.y += star.speed;

      if (star.y > canvas.height) {
        star.y = 0;
        star.x = Math.random() * canvas.width;
      }

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

function initNavigation() {
  const tabs = document.querySelectorAll(".nav-tab");
  const content = document.getElementById("content");

  if (!tabs.length || !content) return;

  function setActive(tabName) {
    tabs.forEach(t => {
      t.classList.toggle("active", t.dataset.tab === tabName);
    });

    content.classList.add("fade");

    setTimeout(() => {
      content.innerHTML = renderTab(tabName);
      content.classList.remove("fade");
    }, 150);
  }

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      setActive(tab.dataset.tab);
    });
  });

  setActive("home");
}

function renderTab(tab) {
  if (tab === "home") {
    return `
      <div class="items">
        <div class="item item-bare">
          <div>
            <div class="item-name">${config.name}</div>
            <div class="item-handle">${config.handle}</div>
          </div>
        </div>
      </div>
    `;
  }

  if (tab === "about") {
    return `
      <div class="about-text">
        ${config.bio.map(p => `<p>${p}</p>`).join("")}
      </div>
    `;
  }

  if (tab === "projects") {
    return `
      <div class="projects-list">
        ${config.projects.map(p => `
          <a class="project-item" href="${p.url}" target="_blank">
            <div class="project-name">${p.name}</div>
            <div class="project-desc">${p.description}</div>
            <div class="project-tags">
              ${p.tags.map(t => `<span class="tag">${t}</span>`).join("")}
            </div>
          </a>
        `).join("")}
      </div>
    `;
  }

  if (tab === "socials") {
    return `
      <div class="socials-list">
        ${config.socials.map(s => `
          <a class="socials-link" href="${s.url}" target="_blank">
            <span>${s.label}</span>
            <span>${s.handle}</span>
          </a>
        `).join("")}
      </div>
    `;
  }

  return "";
}

window.addEventListener("load", () => {
  initStars();
  initIntro();
  initNavigation();

 const DISCORD_ID = "1453556642296627355";


function loadLanyard() {
  const ws = new WebSocket("wss://api.lanyard.rest/socket");

  ws.onopen = () => {
    ws.send(JSON.stringify({
      op: 2,
      d: {
        subscribe_to_id: DISCORD_ID
      }
    }));
  };

  ws.onmessage = (event) => {
    const data = JSON.parse(event.data);
    console.log("Lanyard data:", data);

    if (data.op === 0) {
      updateStatus(data.d);
    }
  };
}

function updateStatus(data) {
  const status = data.discord_status;

  const dot = document.querySelector(".status-dot");
  const text = document.getElementById("statusText");

  if (dot) dot.className = "status-dot " + status;
  if (text) text.textContent = status;

  const activityText = document.getElementById("activityText");
  const activity = data.activities?.find(a => a.type === 0);

  if (activityText) {
    activityText.textContent = activity
      ? `Playing ${activity.name}`
      : "No activity";
  }
}

// Start Lanyard
loadLanyard();

  ws.onmessage = (event) => {
    const data = JSON.parse(event.data);

    console.log("Lanyard data:", data);

    if (data.op === 0) {
      updateStatus(data.d);
    }
  };
}

function updateStatus(data) {
  const status = data.discord_status;

  const dot = document.querySelector(".status-dot");
  const text = document.getElementById("statusText");

  if (dot) dot.className = "status-dot " + status;
  if (text) text.textContent = status;

  const activityText = document.getElementById("activityText");
  const activity = data.activities?.find(a => a.type === 0);

  if (activityText) {
    activityText.textContent = activity
      ? `Playing ${activity.name}`
      : "No activity";
  }
}

loadLanyard();

});
