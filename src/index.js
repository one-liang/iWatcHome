document.addEventListener("DOMContentLoaded", function () {
  const video1 = document.getElementById("video1");
  if (video1) {
    video1.muted = true;
    video1.play();
  }

  const video2 = document.getElementById("video2");
  const playVideoBtn = document.getElementById("playVideoBtn");
  const pauseVideoBtn = document.getElementById("pauseVideoBtn");

  function toggleVideoPlayState() {
    if (video2.paused) {
      video2.play();
      playVideoBtn.classList.add("iwh-hidden");
      pauseVideoBtn.classList.remove("iwh-hidden");

      setTimeout(() => {
        pauseVideoBtn.classList.add("!iwh-opacity-0");
      }, 1000);
    } else {
      video2.pause();
      playVideoBtn.classList.remove("iwh-hidden");
      pauseVideoBtn.classList.add("iwh-hidden");
      pauseVideoBtn.classList.remove("!iwh-opacity-0");
    }
  }

  video2.addEventListener("click", toggleVideoPlayState);

  playVideoBtn.addEventListener("click", toggleVideoPlayState);
  pauseVideoBtn.addEventListener("click", toggleVideoPlayState);

  const scrollBtn1 = document.getElementById("scrollBtn1");
  const scrollBtn2 = document.getElementById("scrollBtn2");
  const scrollBtn3 = document.getElementById("scrollBtn3");
  const scrollBtn4 = document.getElementById("scrollBtn4");

  scrollBtn1.addEventListener("click", function () {
    document.getElementById("section3").scrollIntoView({
      behavior: "smooth",
    });
  });

  scrollBtn2.addEventListener("click", function () {
    document.getElementById("section4").scrollIntoView({
      behavior: "smooth",
    });
  });

  scrollBtn3.addEventListener("click", function () {
    document.getElementById("section6").scrollIntoView({
      behavior: "smooth",
    });
  });

  scrollBtn4.addEventListener("click", function () {
    document.getElementById("section7").scrollIntoView({
      behavior: "smooth",
    });
  });
});
