const randomArr = [];
const userArr = [];

let started = false;
let level = 0;

let btns = ["yellow", "red", "purple", "green"];

let h2 = document.querySelector("h2");

const startGame = document.querySelector(".startGame");

// let allBtn = document.querySelectorAll(".btn");

// allBtn.forEach((btns) => {
//     const random = Math.floor(Math.random() * 3);
//     console.log(random);
// })

startGame.addEventListener("click", () => {
    if (started == false) {
        console.log("game start");
        started = true;
        
        start();
    }
    startGame.style.backgroundColor = "red";
    startGame.style.color = "white";
    
    setTimeout(() => {
        startGame.style.backgroundColor = "#fff";
        startGame.style.color = "#000";
        // startGame.style.display = "none";
    }, 200);
})


function start() {
    level++;
    h2.innerText = `Level ${level}`;

    let random = Math.floor(Math.random() * 4);
    let randomcolor = btns[random];
    let randomBtn = document.querySelector(`.${randomcolor}`);

    console.log(randomBtn);
    console.log(randomcolor);

    btnFlash(randomBtn);
    
    randomBtn.addEventListener("click", () => {
        start();
        
    })
}

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(() => {
    btn.classList.remove("flash");
    }, 300);
}