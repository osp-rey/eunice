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
}
