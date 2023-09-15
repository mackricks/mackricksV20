const dropdown = document.getElementById("dropdown");
const menuIcon = document.getElementById("menuIcon");
const exitIcon = document.getElementById("exitIcon");
const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");
const optOne = document.getElementById("option1");
const optTwo = document.getElementById("option2");
const optThree = document.getElementById("option3");
const Pic1 = document.getElementById("Pic1");
const Pic2 = document.getElementById("Pic2");
const Pic3 = document.getElementById("Pic3");
const Text1 = document.getElementById("Text1");
const Text2 = document.getElementById("Text2");
const Text3 = document.getElementById("Text3");

// let picOne = true;
// let picTwo = false;
// let picThree = false;

const numPics = 3;
let currentPic = 0;

console.log(currentPic);

setInterval(autoPic, 4000);

function autoPic() {
    NextPic();
    UpdatePic();
}

function NextPic() {
    currentPic++;
    if (currentPic >= numPics) {
        currentPic = 0;
    }

    

    console.log(currentPic);
}

// function PrevPic() {
//     if (currentPic == 0)
//        {
//         currentPic = numPics - 1;
//         return;
//        }

//        currentPic--;

//        console.log(currentPic);
// }

// rightArrow.addEventListener("click", () => {
//     NextPic();
//     UpdatePic();
// });

// leftArrow.addEventListener("click", () => {
//     PrevPic();
//     UpdatePic();
// });

optOne.addEventListener("click", () => {
    currentPic = 0;
    UpdatePic();
});
optTwo.addEventListener("click", () => {
    currentPic = 1;
    UpdatePic();
});
optThree.addEventListener("click", () => {
    currentPic = 2;
    UpdatePic();
});

function UpdatePic()
{
    console.log(currentPic);
    switch (currentPic) {
        case 0:
            Pic1.style.display = "block";
            Text1.style.display = "block";
            Pic2.style.display = "none";
            Text2.style.display = "none";
            Pic3.style.display = "none";
            Text3.style.display = "none"; 
            break; 
        case 1:
            Pic1.style.display = "none";
            Text1.style.display = "none";
            Pic2.style.display = "block";
            Text2.style.display = "block";
            Pic3.style.display = "none";
            Text3.style.display = "none";            
            break; 
        case 2:
            Pic1.style.display = "none";
            Text1.style.display = "none";
            Pic2.style.display = "none";
            Text2.style.display = "none";
            Pic3.style.display = "block";
            Text3.style.display = "block";  
            break; 
    }
}

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