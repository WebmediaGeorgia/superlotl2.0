window.onload = function () {
  let buttonPrev = document.querySelector(".button-prev"),
    buttonNext = document.querySelector(".button-next"),
    slideWrapper = document.querySelector(".slide-wrapper"),
    slide = document.querySelectorAll(".slide"),
    roadmapButton = document.querySelectorAll(".navigation__button"),
    vrContainer = document.querySelector("#vr"),
    backgroundButton = document.querySelector(".background-button"),
    slideIndex = 0,
    slideWidth = 0,
    translateWidth = 0,
    vw,
    header = document.querySelector('.header'),
    openMenu = document.querySelector('.open-menu'),
    closeMenu = document.querySelector('.close-menu'),
    body = document.querySelector('body'),
    buttonWidth;

    openMenu.addEventListener('click', function(){
      header.classList.add('active')
      body.style.overflow = 'hidden'
    })
    closeMenu.addEventListener('click', function(){
      header.classList.remove('active')
      body.style.overflow = 'visible'
    })
    
  function countVw(a, b) {
    vw = (screen.width / a) * b;
    translateWidth = slide[0].clientWidth;
    console.log(vw);
  }
  countVw();

  function dynamicWidth() {
    buttonWidth = roadmapButton[0].clientWidth;
    backgroundButton.style.width = buttonWidth + "px";
  }
  dynamicWidth();

  if (screen.width >= 1281) {
    countVw(19.2, 0.1);
  }
  if (screen.width >= 861) {
    countVw(10.24, 0.0867);
  }
  if (screen.width >= 601) {
    countVw(7.68, 0.08);
  }
  if (screen.width <= 600) {
    countVw(.75, 0.0824);
  }

  window.addEventListener("resize", function () {
    translateWidth = slide[0].clientWidth;
    if (screen.width >= 1281) {
      countVw(19.2, 0.1);
    }
    if (screen.width >= 861) {
      countVw(10.24, 0.0867);
    }
    if (screen.width >= 601) {
      countVw(7.68, 0.08);
    }
    if (screen.width <= 600) {
      countVw(.75, 0.0824);
    }
    dynamicWidth();
  });

  if (slideIndex == 0) {
    buttonPrev.classList.add("inactive");
  }

  slide[1].classList.add("active");
  slide[2].classList.add("active");

  function prevSlide() {
    if (slideIndex >= 1) {
      slideWidth = slideWidth + translateWidth + vw;
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
      slideWidth = slideWidth - translateWidth - vw;
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

  for (let i = 0; i < roadmapButton.length; i++) {
    roadmapButton[i].addEventListener("click", function () {
      if (i == 0) {
        vrContainer.className = "step1";
        buttonWidth = roadmapButton[0].clientWidth;
        backgroundButton.style.width = buttonWidth + "px";
      }
      if (i == 1) {
        vrContainer.className = "step2";
        buttonWidth = roadmapButton[1].clientWidth;
        backgroundButton.style.width = buttonWidth + "px";
      }
      if (i == 2) {
        vrContainer.className = "step3";
        buttonWidth = roadmapButton[2].clientWidth;
        backgroundButton.style.width = buttonWidth + "px";
      }
    });
  }
};
