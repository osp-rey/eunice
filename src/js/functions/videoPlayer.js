export default function videoPlayer() {
  const players = document.querySelectorAll(".video-player");

  if (players.length) {
    players.forEach((player) => {
      player.addEventListener("click", () => {
        const video = player.querySelector(".video-player__video");

        if (!player.classList.contains("_active")) {
          video.play();
          player.classList.add("_active");
        } else {
          video.pause();
          player.classList.remove("_active");
        }

        video.addEventListener("ended", () => {
          player.classList.remove("_active");
        });
      });
    });
  }
}
