export default function offsetTop() {
  const items = document.querySelectorAll("._offset-top");

  if (items.length && window.matchMedia("(min-width: 1026px)").matches) {
    const headerHeight = document.querySelector(".header").clientHeight;
    items.forEach((item) => {
      item.style.top = `${headerHeight + 20}px`;
    });
  }
}
