const containerElem = document.querySelector(".time")
const hoursElem = document.querySelector(".hours")
const minutesElem = document.querySelector(".minutes")
const dotsElem = document.querySelector(".dots")

dotsElem.textContent = ":"

const highlightedClassName = "highlighted"

setInterval(() => {
  const h = new Date().getHours()
  const m = new Date().getMinutes()

  hoursElem.textContent = h
  minutesElem.textContent = m < 10 ? "0" + m : m

  const isTimeToRing = !(m % 20)

  if (isTimeToRing) {
    containerElem.classList.add(highlightedClassName)
  } else {
    containerElem.classList.remove(highlightedClassName)
  }
}, 100)
