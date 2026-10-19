export default function applyItems() {
  const items = document.querySelectorAll("[data-apply-item]");

  if (items.length) {
    items.forEach((item) => {
      item.addEventListener("click", () => {
        const id = item.dataset.applyItem;
        const target = document.querySelector(`[data-apply-target="${id}"]`);

        if (target) {
          const headerHeight = document.querySelector(".header").clientHeight;
          if (
            target.hasAttribute("data-more-item") &&
            !target.classList.contains("_active")
          ) {
            target.style.transition = "none";
            target.classList.add("_active", "_show");
          }

          setTimeout(() => {
            const offsetTop =
              target.getBoundingClientRect().top +
              window.pageYOffset -
              headerHeight -
              20;
            window.scrollTo({
              top: offsetTop,
              behavior: "smooth",
            });

            target.classList.add("_focus");
            setTimeout(() => {
              target.classList.remove("_focus");
            }, 2500);
          }, 50);
        }
      });
    });
  }
}
