let buttonNext = document.querySelector(".button-next"),
  buttonPrev = document.querySelector(".button-prev"),
  slideWrapper = document.querySelector(".slide-wrapper"),
  slide = document.querySelectorAll(".slide"),
  slideWidth,
  translateWidth = 0,
  slideIndex = 0,
  newIndex,
  vw;

window.addEventListener("resize", function () {
  slideWidth = slide[0].clientWidth;
  dynamicWidth();
});

buttonPrev.classList.add("inactive");

slideWidth = slide[0].clientWidth;

function countVw(a, b) {
  vw = (screen.width / a) * b;
}

function dynamicWidth() {
  if (screen.width >= 1281) {
    countVw(19.2, 0.2);
  }
  if ((screen.width >= 861) & (screen.width <= 1280)) {
    countVw(10.24, 0.18);
  }
  if ((screen.width >= 601) & (screen.width <= 860)) {
    countVw(7.68, 0.1958);
  }
  if (screen.width <= 600) {
    countVw(3.75, 0.1814);
  }
}
dynamicWidth();

buttonNext.addEventListener("click", function () {
  nextSlide();
});
buttonPrev.addEventListener("click", function () {
  prevSlide();
});

function nextSlide() {
  if (slideIndex < slide.length - 3) {
    buttonPrev.classList.remove("inactive");
    translateWidth = translateWidth - slideWidth - vw;
    slideWrapper.style.transform = `translateX(${translateWidth}px)`;
    newIndex = slideIndex++;
    if (newIndex == slide.length - 4) {
      buttonNext.classList.add("inactive");
    }
  }
}
function prevSlide() {
  if (slideIndex !== 0) {
    buttonNext.classList.remove("inactive");
    translateWidth = translateWidth + slideWidth + vw;
    slideWrapper.style.transform = `translateX(${translateWidth}px)`;
    newIndex = slideIndex--;
    if (newIndex == 1) {
      buttonPrev.classList.add("inactive");
    }
  }
}
