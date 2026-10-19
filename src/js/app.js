import applyItems from "./functions/applyItems.js";
import burger from "./functions/burger.js";
import buttonsNote from "./functions/buttonsNote.js";
import changeModalTitle from "./functions/changeModalTitle.js";
import changeProduct from "./functions/changeProduct.js";
import inputmask from "./functions/inputmask.js";
import map from "./functions/map.js";
import modalR from "./functions/modalR.js";
import more from "./functions/more.js";
import offsetTop from "./functions/offsetTop.js";
import sect from "./functions/sect.js";
import sectTag from "./functions/sectTag.js";
import selectHandler from "./functions/select.js";
import sliders from "./functions/sliders.js";
import stepsProgress from "./functions/stepsProgress.js";
import videoPlayer from "./functions/videoPlayer.js";

document.addEventListener("DOMContentLoaded", () => {
  sliders();
  burger();
  buttonsNote();
  changeModalTitle();
  inputmask();
  sectTag();
  videoPlayer();
  sect();
  more();
  applyItems();
  stepsProgress();
  offsetTop();
  map();
  selectHandler();
  modalR();
  changeProduct();

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
