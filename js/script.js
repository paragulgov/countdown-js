// Extract HTML elements to interact with JavaScript
const timeCells = document.querySelectorAll(".countdown-time")
const countdownElement = document.querySelector(".countdown")
const input = document.querySelector(".input")
const btn = document.querySelector(".btn")

// Countdown date
const countdownDate = new Date(2022, 0, 0, 0, 0, 0).getTime()

function getCountdownTime() {
   // Difference in time
   const now = new Date().getTime()
   const difference = countdownDate - now

   // Counting days, hours, minutes
   const oneDay = 24 * 60 * 60 * 1000
   const oneHour = 60 * 60 * 1000
   const oneMinute = 60 * 1000

   const days = Math.floor(difference / oneDay)
   const hours = Math.floor((difference % oneDay) / oneHour)
   const minutes = Math.floor((difference % oneHour) / oneMinute)
   const seconds = Math.floor((difference % oneMinute) / 1000)

   const timeValues = [days, hours, minutes, seconds]

   // Change the time in HTML
   timeCells.forEach((item, index) => {
      item.innerText = timeValues[index]
   })

   // If time is over
   if (difference < 0) {
      clearInterval(countdown)
      countdownElement.innerHTML = "<h2 class='expired'>Время вышло</h2>"
   }
}

// Counter update
const countdown = setInterval(getCountdownTime, 1000)

// Initialization
getCountdownTime()

// Outputting the field value to alert
btn.addEventListener('click', () => {
   alert(input.value)
})
