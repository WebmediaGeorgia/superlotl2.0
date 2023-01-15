let buttonPrev = document.querySelector(".button-prev"),
  buttonNext = document.querySelector(".button-next"),
  slideWrapper = document.querySelector(".slide-wrapper"),
  slide = document.querySelectorAll(".slide"),
  slideIndex = 0,
  slideWidth = 0;
const translateWidth = slide[0].clientWidth;

if (slideIndex == 0) {
  buttonPrev.classList.add("inactive");
}

slide[1].classList.add("active");
slide[2].classList.add("active");

function prevSlide() {
  if (slideIndex >= 1) {
    slideWidth = slideWidth + translateWidth + 10;
    slideWrapper.style.transform = `translateX(${slideWidth}px)`;
    slideIndex = slideIndex - 1;
    slide[slideIndex + 1].classList.add("active");
    slide[slideIndex + 3].classList.remove("active");
  }
  if (slideIndex == 0) {
    buttonPrev.classList.add("inactive");
  }
  if (slideIndex !== slide.length - 4) {
    buttonNext.classList.remove("inactive");
  }
}

function nextSlide() {
  if (slideIndex < slide.length - 4) {
    slideWidth = slideWidth - translateWidth - 10;
    slideWrapper.style.transform = `translateX(${slideWidth}px)`;
    slideIndex = slideIndex + 1;
    slide[slideIndex + 1].classList.add("active");
    slide[slideIndex + 2].classList.add("active");
    slide[slideIndex].classList.remove("active");
  }
  if (slideIndex > 0) {
    buttonPrev.classList.remove("inactive");
  }
  if (slideIndex == slide.length - 4) {
    buttonNext.classList.add("inactive");
  }
}

document.querySelector(".button-prev").addEventListener("click", prevSlide);

document.querySelector(".button-next").addEventListener("click", nextSlide);
