export default function sectTag() {
  const items = document.querySelectorAll(".sect-tag");

  if (items.length && window.matchMedia("(min-width: 1026px)").matches) {
    const headerHeight = document.querySelector(".header").clientHeight;
    items.forEach((item) => {
      item.style.top = `${headerHeight + 20}px`;
    });
  }

  const sectsP = document.querySelectorAll(".sect-p");
  const sectsM = document.querySelectorAll(".sect-m");
  if (sectsP.length || sectsM.length) {
    const sects = [...sectsM, ...sectsP];

    const headerHeight = document.querySelector(".header").clientHeight;
    sects.forEach((sect) => {
      if (sect.classList.contains("_not-top")) return;
      sect.style.scrollMarginTop = `${headerHeight + 20}px`;
    });
  }
}
