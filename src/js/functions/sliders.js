export default function sliders() {
  const heroSlider = document.querySelector(".s-hero__slider");

  if (heroSlider) {
    const bgSlider = document.querySelector(".s-hero__bg-slider");

    const swiperBg = new Swiper(bgSlider, {
      speed: 900,
    });

    const swiper = new Swiper(heroSlider, {
      speed: 900,
      slidesPerView: 1,
      effect: "fade",
      autoplay: {
        delay: 6500,
      },
      controller: {
        control: swiperBg,
      },
      navigation: {
        nextEl: ".s-hero__slider-next",
      },
      pagination: {
        el: ".s-hero .slider-pagination",
        clickable: true,
      },
    });
  }

  const applySlider = document.querySelector(".s-apply__slider");

  if (applySlider) {
    const swiper = new Swiper(applySlider, {
      speed: 900,
      spaceBetween: 10,
      slidesPerView: "auto",
      autoplay: {
        delay: 5000,
      },
      navigation: {
        nextEl: ".s-apply .slider-arrow._next",
        prevEl: ".s-apply .slider-arrow._prev",
      },
      pagination: {
        el: ".s-apply .slider-pagination",
        clickable: true,
      },
      breakpoints: {
        1366: {
          spaceBetween: 20,
          slidesPerView: 4,
        },
        768: {
          spaceBetween: 15,
          slidesPerView: "auto",
        },
      },
    });
  }
}
