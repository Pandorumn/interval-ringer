var containerElem = document.querySelector(".time")
var hoursElem = document.querySelector(".hours")
var minutesElem = document.querySelector(".minutes")
var dotsElem = document.querySelector(".dots")
var audioElem = document.querySelector("audio")
var iconMuted = document.querySelector(".icon-muted")
var iconSpeaker = document.querySelector(".icon-speaker")

var highlightedClassName = "highlighted"
var hiddenClassName = "hidden"

dotsElem.textContent = ":"

function ring() {
  var audio = new Audio("pristine-609.mp3")
  audio.play()
}
function unmute() {
  iconMuted.classList.add(hiddenClassName)
  iconSpeaker.classList.remove(hiddenClassName)
}
document.addEventListener("click", unmute)
iconSpeaker.addEventListener("click", ring)

function useMunitesState() {
  var previousM = 0

  function setPreviousM(value) {
    previousM = value
  }
  function getPreviousM() {
    return previousM
  }

  return { setPreviousM: setPreviousM, getPreviousM: getPreviousM }
}

var munitesState = useMunitesState()
var getPreviousM = munitesState.getPreviousM
var setPreviousM = munitesState.setPreviousM

function run() {
  var h = new Date().getHours()
  var m = new Date().getMinutes()

  hoursElem.textContent = h
  minutesElem.textContent = m < 10 ? "0" + m : m

  var isTimeToRing = !(m % 20)
  var isRinged = !(getPreviousM() % 20)

  setPreviousM(m)

  if (isTimeToRing) {
    containerElem.classList.add(highlightedClassName)
    !isRinged && ring()
  } else {
    containerElem.classList.remove(highlightedClassName)
  }
}

setInterval(run, 100)
