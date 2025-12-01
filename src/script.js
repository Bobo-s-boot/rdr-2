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

const shotgunSection = document.querySelector(".shotgun-section");
const shell1 = document.querySelector(".shell-1");
const shell2 = document.querySelector(".shell-2");
const flash = document.querySelector(".muzzle-flash");
let hasFired = false;

window.addEventListener("scroll", () => {
  const position = shotgunSection.getBoundingClientRect();

  // Перевірка, чи секція в межах видимої області
  if (position.top < window.innerHeight && position.bottom >= 0 && !hasFired) {
    hasFired = true;

    // Запуск спалаху
    flash.classList.add("flash-animation");

    // Запуск гільз із невеликою затримкою
    setTimeout(() => {
      shell1.classList.add("drop-animation-1");
      shell2.classList.add("drop-animation-2");
    }, 500);
  }
});

window.addEventListener("resize", updateSlide);
