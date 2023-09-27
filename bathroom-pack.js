const menuIcon = document.getElementById("menuIcon");
const exitIcon = document.getElementById("exitIcon");
const logo = document.getElementById("logo");
const mobileLogo = document.getElementById("logoIcon")

const Pic1 = document.getElementById("pic1");
const Pic2 = document.getElementById("pic2");
const Pic3 = document.getElementById("pic3");
const Pic4 = document.getElementById("pic4");

const rightArrow = document.getElementById("right_arrow");
const leftArrow = document.getElementById("left_arrow");

const gdm = document.getElementById("gdm");

const numPics = 4;
let currentPic = 0;

gdm.addEventListener("click", () => {
    window.open("https://www.gamedevmarket.net/asset/bathroom-props-pack","_self");
});

leftArrow.addEventListener("click", () => {
    PrevPic();
    UpdatePic();
});

rightArrow.addEventListener("click", () => {
    NextPic();
    UpdatePic();
});

function NextPic() {
    currentPic++;
    if (currentPic >= numPics) {
        currentPic = 0;
    }
}

function PrevPic() {
    if (currentPic == 0)
       {
        currentPic = numPics - 1;
        return;
       }

       currentPic--;

}


function UpdatePic()
{
    timer = 0;

    switch (currentPic) {
        case 0:
            Pic1.style.display = "block";
            Pic2.style.display = "none";
            Pic3.style.display = "none";
            Pic4.style.display = "none";
        break; 
        case 1:
            Pic2.style.display = "block";
            Pic1.style.display = "none";
            Pic3.style.display = "none";
            Pic4.style.display = "none";
            break; 
        case 2:
            Pic3.style.display = "block";
            Pic2.style.display = "none";
            Pic1.style.display = "none";
            Pic4.style.display = "none";
            break; 
        case 3:
            Pic4.style.display = "block";
            Pic2.style.display = "none";
            Pic1.style.display = "none";
            Pic3.style.display = "none";
            break;             
    }
}

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
});