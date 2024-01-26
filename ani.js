gsap.from("mark", {
    x: -1600,
    duration: 0.5,
    delay: 0.5,
    stagger: 1
});

gsap.from(".back-game", {
    x: -1400,
    duration: 0.5,
    delay: 8,
});

gsap.from(".ani", {
    x: -1400,
    duration: 0.5,
    delay: 0.1,
    stagger: 1
});

gsap.from(".ani2", {
    y: -1400,
    duration: 0.5,
    delay: 0.1,
    stagger: 1
});

let playBtn = document.querySelector(".click");
let song = new Audio("justSay.wav");

playBtn.addEventListener("click", () => {
  if (song.paused || song.currentTime <= 0) {
    playFunc();
    playBtn.classList.remove("fa-volume-high");
    playBtn.classList.add("fa-volume-xmark");
  } else {
    playBtn.classList.add("fa-volume-high");
    playBtn.classList.remove("fa-volume-xmark");
    song.pause();
  }
});

let playFunc = function () {
  song.play();
};
