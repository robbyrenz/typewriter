window.addEventListener("keydown", playSound)

function playSound(e) {
  const audio = document.querySelector('audio')
  audio.currentTime = 0
  audio.play();
}
