import burger from "./functions/burger.js";
import buttonsNote from "./functions/buttonsNote.js";
import changeModalTitle from "./functions/changeModalTitle.js";
import inputmask from "./functions/inputmask.js";
import sectTag from "./functions/sectTag.js";
import sliders from "./functions/sliders.js";
import videoPlayer from "./functions/videoPlayer.js";

document.addEventListener("DOMContentLoaded", () => {
  sliders();
  burger();
  buttonsNote();
  changeModalTitle();
  inputmask();
  sectTag();
  videoPlayer();

  // Fancybox.show([{ type: "inline", src: "#modal-feedback" }]);

  Fancybox.bind("[data-fancybox]", {
    on: {
      destroy: (instance) => {
        const id = instance.getSlide().src;

        if (id.includes("#modal")) {
          const modal = document.querySelector(id);
          const inputNote = modal.querySelector(".input-note");
          const modalTitle = modal.querySelector(".modal__title[data-text]");

          if (inputNote) inputNote.value = "";
          if (modalTitle) modalTitle.textContent = modalTitle.dataset.text;
        }
      },
    },
  });
});
