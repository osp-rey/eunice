export default function modalR() {
  const buttons = document.querySelectorAll("[data-modal-r-btn]");

  if (buttons.length) {
    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.dataset.modalRBtn;
        const modal = document.querySelector(`#${id}`);

        if (!modal) return;

        modal.classList.add("_open");
        document.body.classList.add("body-hidden");
      });
    });
  }

  const buttonsClose = document.querySelectorAll("[data-modal-r-close]");

  if (buttonsClose.length) {
    buttonsClose.forEach((btn) => {
      btn.addEventListener("click", () => {
        const modal = btn.closest(".modal-r");

        if (!modal) return;

        modal.classList.remove("_open");
        document.body.classList.remove("body-hidden");
      });
    });
  }
}
