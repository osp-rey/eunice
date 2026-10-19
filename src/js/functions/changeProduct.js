export default function changeProduct() {
  const buttons = document.querySelectorAll(".card-product__btn-more");

  if (buttons.length) {
    const modalTitle = document.querySelector("#modal-product-title");
    const modalList = document.querySelector("#modal-product-list");
    const modalContent = document.querySelector("#modal-product-content");
    const modalItems = document.querySelector("#modal-product-items");
    const modalProductFeedback = document.querySelector(
      "#modal-product-feedback",
    );
    const modalButtons = document.querySelector("#modal-product-buttons");

    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const product = btn.closest(".card-product");

        const dataTitle = product.dataset.title;
        const dataList = product.dataset.list.split(",");
        const dataContent = product.dataset.content;
        const dataItems = JSON.parse(product.dataset.items);
        const dataFile = product.dataset.file;

        const htmlBtnFile = modalButtons.querySelector(".modal-r__btn-file");

        if (htmlBtnFile) btnFile.remove();

        modalTitle.textContent = dataTitle;

        dataList.forEach((item) => {
          const li = document.createElement("li");
          li.textContent = item;

          modalList.appendChild(li);
        });

        modalContent.innerHTML = dataContent;

        dataItems.forEach((item) => {
          const htmlItem = document.createElement("div");
          htmlItem.classList.add("modal-r__item");

          htmlItem.innerHTML = `
            <div class="item-title">${item[0]}</div>
            <div class="item-content">${item[1]}</div>
          `;

          modalItems.appendChild(htmlItem);
        });

        modalProductFeedback.setAttribute("data-btn-note", dataTitle);

        if (dataFile) {
          const btnFile = document.createElement("a");
          btnFile.classList.add(
            "btn-s",
            "_outline-secondary-white",
            "modal-r__btn-file",
          );
          btnFile.setAttribute("href", dataFile);
          btnFile.setAttribute("download", "");
          btnFile.innerHTML = `
            <i class="icon-download"></i>
            <span>Скачать тех. документацию</span>
          `;
          modalButtons.appendChild(btnFile);
        }
      });
    });
  }
}
