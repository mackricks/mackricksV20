const menuIcon = document.getElementById("menuIcon");
const exitIcon = document.getElementById("exitIcon");
const logo = document.getElementById("logo");

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