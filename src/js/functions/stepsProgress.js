export default function stepsProgress() {
  const wrap = document.querySelector(".s-steps__wrap-grid");

  if (wrap) {
    const items = Array.from(document.querySelectorAll(".s-steps__item"));
    const step = 100 / items.length;

    let rafId = null;

    function update() {
      rafId = null;
      const viewportCenter = window.innerHeight * 1;

      let passedCount = 0;

      items.forEach((item) => {
        const rect = item.getBoundingClientRect();
        const isPassed = rect.top + rect.height * 1 < viewportCenter;

        item.classList.toggle("_active", isPassed);

        if (isPassed) passedCount++;
      });

      const progress = Math.min(100, step * passedCount);
      wrap.style.setProperty("--progress", `${progress}%`);
    }

    function onScroll() {
      if (rafId !== null) return;
      rafId = requestAnimationFrame(update);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    update();
  }
}
