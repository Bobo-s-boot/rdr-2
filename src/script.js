const slideContainer = document.querySelector(".carousel-slide");
const slides = document.querySelectorAll(".carousel-slide img");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let index = 0;

function getWidth() {
  return document.querySelector(".carousel-slide img").clientWidth;
}

function updateSlide() {
  slideContainer.style.transform = `translateX(-${index * getWidth()}px)`;
}

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

function nextSlide() {
  index = (index + 1) % slides.length;
  updateSlide();
}

function prevSlide() {
  index = (index - 1 + slides.lenght) % slides.lenght;
  updateSlide();
}

setInterval(() => {
  nextSlide();
}, 8000);

window.addEventListener("resize", updateSlide);
