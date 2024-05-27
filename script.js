const slides = document.querySelectorAll(".slide");
const btnleft = document.querySelector(".slider__btn--left");
const btnright = document.querySelector(".slider__btn--right");
const slider = document.querySelector(".slider");
const dotContainer = document.querySelector(".dots"); // Assuming there's a container for dots in your HTML

let curslide = 0;
let maxslides = slides.length;
// slider.style.transform = "scale(0.199999) translate(-1000px)";
// slider.style.overflow = "visible";

const createdots = function () {
  slides.forEach(function (s, i) {
    dotContainer.insertAdjacentHTML(
      "beforeend",
      `<button class="dots_dot" data-slide="${i}"></button>`
    );
  });
};
createdots();

const gotoslide = function (slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
};
gotoslide(0);

const nextslide = function () {
  if (curslide === maxslides - 1) {
    curslide = 0;
  } else {
    curslide++;
  }
  gotoslide(curslide);
};

const prevslide = function () {
  if (curslide === 0) {
    curslide = maxslides - 1;
  } else {
    curslide--;
  }
  gotoslide(curslide);
};

slides.forEach((s, i) => (s.style.transform = `translateX(${100 * i}%)`));
btnright.addEventListener("click", nextslide);
btnleft.addEventListener("click", prevslide);
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") prevslide();
  e.key === "ArrowRight" && nextslide();
});
