const sliderMain = new Swiper(".slider_main", {
  freeMode: true,
  centeredSlides: true,
  mousewheel: true,
  parallax: true,
  breakpoints: {
    0: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
    680: {
      slidesPerView: 3.5,
      spaceBetween: 60,
    },
  },
});
const sliderBg = new Swiper(".slider_bg", {
  centeredSlides: true,
  parallax: true,
  spaceBetween: 60,
  slidesPerView: 3.5,
});
sliderMain.controller.control = sliderBg;

document.querySelectorAll(".slider__item").forEach((item) => {
  item.addEventListener("click", (event) => {
    item.classList.toggle("opened");
  });
});

let desc = document.querySelector(".description");
sliderMain.on("slideChange", (e) => {
  sliderMain.activeIndex > 0
    ? desc.classList.add("hidden")
    : desc.classList.remove("hidden");
});
const sliderWrapper = document.querySelector(".slider__wrapper");

// Создание нового слайда и его содержимого
const newSlide = document.createElement("div");
newSlide.classList.add("swiper-slide", "slider__item");
const newImage = document.createElement("img");
newImage.classList.add("slider__img");
newImage.src = "path/to/new_image.jpg"; // Замените на путь к новому изображению
newImage.alt = "New Cityscape"; // Замените на альтернативный текст

// Добавление изображения в слайд и слайда в слайдер
newSlide.appendChild(newImage);
sliderWrapper.appendChild(newSlide);
const slideToChange = document.querySelector(".slider__item:nth-child(2)"); // Изменение второго слайда (по порядку)

// Изменение изображения в слайде
const imageToUpdate = slideToChange.querySelector(".slider__img");
imageToUpdate.src = "path/to/updated_image.jpg"; // Замените на путь к обновленному изображению
imageToUpdate.alt = "Updated Cityscape"; // Замените на новый альтернативный текст
const slideToRemove = document.querySelector(".slider__item:nth-child(3)"); // Удаление третьего слайда (по порядку)

// Удаление слайда из слайдера
slideToRemove.remove();
