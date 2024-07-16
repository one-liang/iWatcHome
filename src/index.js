document.addEventListener("DOMContentLoaded", function () {
  AOS.init();

  const video1 = document.getElementById("video1");
  if (video1) {
    video1.muted = true;
    video1.play();
  }

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
