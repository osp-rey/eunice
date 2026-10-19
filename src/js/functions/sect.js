export default function sect() {
  const wraps = document.querySelectorAll(".sect-wrap");

  if (wraps.length) {
    wraps.forEach((wrap) => {
      handlerWidthChange();

      function handlerWidthChange() {
        const body = wrap.querySelector(".sect-body");
        if (window.matchMedia("(min-width: 1366px)").matches) {
          const tag = wrap.querySelector(".sect-tag");
          const widthTag = tag ? tag.clientWidth : 0;
          const gap = +window.getComputedStyle(wrap).gap.slice(0, -2);
          const widthBody = wrap.clientWidth - (gap + widthTag) + "px";

          if (body) {
            body.style.width = `${widthBody}`;
          }
        } else {
          body.style.width = "auto";
        }
      }

      window.addEventListener("resize", handlerWidthChange);
    });
  }
}
