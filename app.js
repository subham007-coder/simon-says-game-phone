let gameArr = [];
let userArr = [];

let started = false;
let level = 0;
let highScore = level;

let btns = ["yellow", "red", "purple", "green"];

let h2 = document.querySelector("h2");

let startGame = document.querySelector(".startGame");

let allBtn = document.querySelectorAll(".btn");

let gameOver = document.querySelector("body");

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
  }, 200);
});

function start() {
  level++;

  h2.innerText = `Level ${level}`;

  if (level >= highScore) {
    document.querySelector(
      ".high-score"
    ).innerHTML = `Your High Score Was ${highScore}`;
    highScore++;
  }

  let random = Math.floor(Math.random() * 4);
  let randomcolor = btns[random];
  let randomBtn = document.querySelector(`.${randomcolor}`);
  gameArr.push(randomcolor);
  console.log(gameArr);

  btnFlash(randomBtn);
}

function btnFlash(btn) {
  btn.classList.add("flash");
  setTimeout(() => {
    btn.classList.remove("flash");
  }, 300);
}

function userFlash(btn) {
  btn.classList.add("userflash");
  setTimeout(() => {
    btn.classList.remove("userflash");
  }, 300);
}

function btnPress() {
  let btn = this;
  userFlash(btn);

  userColor = btn.getAttribute("id");
  userArr.push(userColor);
  checkBtns(userArr.length - 1);
}

allBtn.forEach((btns) => {
  btns.addEventListener("click", btnPress);
});

function checkBtns(indx) {
  if (userArr[indx] === gameArr[indx]) {
    if (gameArr.length == userArr.length) {
      setTimeout(start, 1000);
      userArr = [];
    }
  } else {
    h2.innerHTML = `Game Over! Your Score Was ${level}. <br> Try Again`;
    startGame.textContent = "Try Again";
    resetGame();
    gameEnd();
  }
}

function resetGame() {
  started = false;
  gameArr = [];
  userArr = [];
  level = 0;
}

function gameEnd() {
  gameOver.classList.add("gameOver");

  setTimeout(() => {
    gameOver.classList.remove("gameOver");
  }, 300);
}
