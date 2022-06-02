const containerElem = document.querySelector(".time")
const hoursElem = document.querySelector(".hours")
const minutesElem = document.querySelector(".minutes")
const dotsElem = document.querySelector(".dots")
const audioElem = document.querySelector("audio")
const iconMuted = document.querySelector(".icon-muted")
const iconSpeaker = document.querySelector(".icon-speaker")

const highlightedClassName = "highlighted"
const hiddenClassName = "hidden"

dotsElem.textContent = ":"

function ring() {
  const audio = new Audio("pristine-609.mp3")
  audio.play()
}
function unmute() {
  iconMuted.classList.add(hiddenClassName)
  iconSpeaker.classList.remove(hiddenClassName)
}
document.addEventListener("click", unmute)
iconSpeaker.addEventListener("click", ring)

function useMunitesState() {
  let previousM = 0

  function setPreviousM(value) {
    previousM = value
  }
  function getPreviousM() {
    return previousM
  }

  return { setPreviousM, getPreviousM }
}

const { getPreviousM, setPreviousM } = useMunitesState()

setInterval(() => {
  const h = new Date().getHours()
  const m = new Date().getMinutes()

  hoursElem.textContent = h
  minutesElem.textContent = m < 10 ? "0" + m : m

  const isTimeToRing = !(m % 20)
  const isRinged = !(getPreviousM() % 20)

  setPreviousM(m)

  if (isTimeToRing) {
    containerElem.classList.add(highlightedClassName)
    !isRinged && ring()
  } else {
    containerElem.classList.remove(highlightedClassName)
  }
}, 100)
