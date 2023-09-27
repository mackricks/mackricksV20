const menuIcon = document.getElementById("menuIcon");
const exitIcon = document.getElementById("exitIcon");
const logo = document.getElementById("logo");
const mobileLogo = document.getElementById("logoIcon");

const tiktok = document.getElementById("TT");
const youtube = document.getElementById("YT");

tiktok.addEventListener("click", () => {
    if (window.outerWidth < 600) {
        window.open("https://www.tiktok.com/@mackricks.v20","_self");
    }
});

youtube.addEventListener("click", () => {
    if (window.outerWidth < 600) {
    window.open("http://www.youtube.com/@mackricks.v2092","_self");
    }
});

logo.addEventListener("click", () => {
    window.open("https://mackricks.github.io/mackricksV20/","_self");
});

mobileLogo.addEventListener("click", () => {
    window.open("https://mackricks.github.io/mackricksV20/","_self");
});

menuIcon.addEventListener("click", () => {
    dropdown.style.display = "block";
    menuIcon.style.display = "none";
    exitIcon.style.display = "block";
});

exitIcon.addEventListener("click", () => {
    dropdown.style.display = "none";
    menuIcon.style.display = "block";
    exitIcon.style.display = "none";
})