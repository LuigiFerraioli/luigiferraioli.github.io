const video = document.querySelector('.bg-video');

function tryPlay() {
  if (!video) return;

  video.muted = true;
  video.setAttribute('muted', '');
  video.playsInline = true;

  const playPromise = video.play();
  if (playPromise !== undefined) {
    playPromise.catch(() => {});
  }
}

window.addEventListener('load', tryPlay);
document.addEventListener('touchstart', tryPlay, { once: true });
document.addEventListener('click', tryPlay, { once: true });
