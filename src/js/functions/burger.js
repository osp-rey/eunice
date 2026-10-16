export default function burger() {
  const burger = document.querySelector("#burger");

  if (burger) {
    const burgerOpen = document.querySelector("#burger-open");
    const burgerCloses = document.querySelectorAll("[data-burger-close]");
    const burgerAnchors = burger.querySelectorAll("a[href^='/#']");

    burgerAnchors.forEach((anchor) => {
      anchor.addEventListener("click", () => {
        handleClose();
      });
    });
    burgerOpen.addEventListener("click", () => {
      handleOpen();
    });
    burgerCloses.forEach((btn) => btn.addEventListener("click", handleClose));

    function updateHeightBurger() {
      burger.style.maxHeight = `${window.visualViewport.height}px`;
    }

    function handleOpen() {
      document.body.classList.add("body-hidden");
      burger.classList.add("_open");

      updateHeightBurger();
    }
    function handleClose() {
      document.body.classList.remove("body-hidden");
      burger.classList.remove("_open");
    }

    window.visualViewport.addEventListener("resize", updateHeightBurger);
    window.visualViewport.addEventListener("scroll", updateHeightBurger);

    updateHeightBurger();
  }
}
