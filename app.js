const randomArr = [];
const userArr = [];

const h2 = document.querySelector("h2");

const startGame = document.querySelector(".startGame")
// let allBtn = document.querySelectorAll(".btn");

// allBtn.forEach((btns) => {
//     btns.addEventListener("click", () => {
//         console.log("btn was click");
//         h2.innerText = "Game Was Start";
//         btns.classList.add("userflash")
//         setTimeout(() => {
//             btns.classList.remove("userflash")
//         }, 1000);
//     })
// })

startGame.addEventListener("click", () => {
    startGame.style.backgroundColor = "red";
    startGame.style.color = "white";
    
    setTimeout(() => {
        startGame.style.backgroundColor = "#fff";
        startGame.style.color = "#000";
    }, 300);
})