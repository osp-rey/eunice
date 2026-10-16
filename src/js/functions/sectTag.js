export default function sectTag() {
  const items = document.querySelectorAll(".sect-tag");

  if (items.length) {
    const headerHeight = document.querySelector(".header").clientHeight;
    items.forEach(item => {
      item.style.top = `${headerHeight + 20}px`;
    })
  }
}