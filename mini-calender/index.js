const monthNameEl = document.getElementById("month")
const dayNameEl = document.getElementById("day")
const dayNumberEl = document.getElementById("day-number")
const yearEl = document.getElementById("year")

const date = new Date()
const month = date.getMonth()
monthNameEl.innerText = date.toLocaleString("en", {
    month: "long"
})

dayNameEl.innerText = date.toLocaleDateString("en", {
    weekday: "long"
})

dayNumberEl.innerText = date.getDate()

yearEl.innerText = date.getFullYear()