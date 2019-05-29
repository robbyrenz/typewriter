window.addEventListener("keydown", playSound)
window.addEventListener("keydown", highlightKeyboard)

const keys = document.querySelectorAll(".key")
keys.forEach(key => key.addEventListener("transitionend", removeTransition))

function playSound(e) {
  const audio = document.querySelector('audio')
  audio.currentTime = 0
  audio.play();
}

function highlightKeyboard(e) {
  e.preventDefault()
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`)
  // console.log(key)
  key.classList.add("pressed")
}

function removeTransition() {
  this.classList.remove('pressed')
}
