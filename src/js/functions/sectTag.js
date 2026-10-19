export default function sectTag() {
  const items = document.querySelectorAll(".sect-tag");

  if (items.length && window.matchMedia("(min-width: 1026px)").matches) {
    const headerHeight = document.querySelector(".header").clientHeight;
    items.forEach(item => {
      item.style.top = `${headerHeight + 20}px`;
    })
  }
}