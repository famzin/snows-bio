// ================================
// CONFIG
// ================================

const config = {
    name: "Your Name",
    handle: "@yourname",
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
            name: "Portfolio",
            description: "This website.",
            url: "#",
            tags: ["HTML", "CSS", "JavaScript"]
        }
    ],

    socials: [
        {
            label: "Discord",
            handle: "yourdiscord",
            url: "#"
        },
        {
            label: "GitHub",
            handle: "yourgithub",
            url: "https://github.com/"
        }
    ]
};

// ================================
// APP
// ================================

let activeTab = "home";
let lanyardData = null;

const tabs = [
    "home",
    "about",
    "projects",
    "socials"
];

// ================================
// START
// ================================

window.addEventListener("load", () => {

    initStars();

    initIntro();

    initNavigation();

    loadLanyard();

    renderPage();

});
