window.addEventListener("keydown", playSound)

function playSound(e) {
  const title = document.querySelector("h1")
  if (e.keyCode === 32)
    title.classList.add("highlight")
  else
    return
}
