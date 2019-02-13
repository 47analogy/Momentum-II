const date = new Date()
const hours = document.querySelector('.hours')
const minutes = document.querySelector('.minutes')

hours.textContent = `0${date.getHours()}`.slice(-2)
minutes.textContent = `0${date.getMinutes()}`.slice(-2)
