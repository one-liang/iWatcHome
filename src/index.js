document.addEventListener("DOMContentLoaded", function () {
  const video1 = document.getElementById("video1");
  if (video1) {
    video1.muted = true;
    video1.play();
  }

  const video2 = document.getElementById("video2");
  const playVideoBtn = document.getElementById("playVideoBtn");
  const pauseVideoBtn = document.getElementById("pauseVideoBtn");

  playVideoBtn.addEventListener("click", () => {
    video2.play();
    playVideoBtn.classList.add("iwh-hidden");
    pauseVideoBtn.classList.remove("iwh-hidden");
  });

  pauseVideoBtn.addEventListener("click", () => {
    video2.pause();
    playVideoBtn.classList.remove("iwh-hidden");
    pauseVideoBtn.classList.add("iwh-hidden");
  });
});
