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

window.addEventListener("load", () => {
    initStars();
    initIntro();
    initNavigation();
    loadLanyard();
    renderPage();
});
